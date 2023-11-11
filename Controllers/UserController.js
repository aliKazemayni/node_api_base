import Responder from "../Helpers/Responder.js";
import Token from "../Helpers/Token.js";
import {UserModel} from "../Models/User.js";
import bcrypt from "bcrypt";

class UserController{

    async sign_up(request , response){
        try {
            let validation = await UserModel.store(request.body);
            if (validation === true)
                UserModel.create(request.body).then(user => {
                    let token = Token.generate({
                        "email" : request.body.email
                    });
                    Responder.success(response , {token} , request.t('sign_in'))
                })
            else
                Responder.error(response , validation);
        }catch (e) {
            Responder.error(response , e)
        }
    }

    async sign_in(request , response){
        try {
            UserModel.findOne({email : request.body.email}).then(user => {
                if (user) {
                    bcrypt.compare(request.body.password , user.password , (error , match) => {
                        if (match){
                            let token = Token.generate({
                                "email" : user.email,
                            });
                            Responder.success(response , {token} , request.t('log_in'))
                        }else{
                            Responder.error(response , { message : request.t('invalid_data') })
                        }
                    })
                }
                else
                    Responder.error(response , { message : request.t('not_found_data') })
            })
        }catch (e) {
            Responder.error(response , e)
        }
    }

    show(request , response) {
        Responder.success(response , request.user , request.t('success'))
    }

}

export default new UserController();