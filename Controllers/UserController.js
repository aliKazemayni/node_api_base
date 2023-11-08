import Responder from "../Helpers/Responder.js";
import Token from "../Helpers/Token.js";
import {UserModel} from "../Models/User.js";
import bcrypt from "bcrypt";

class UserController{

    async sign_up(request , response , next){
        try {
            let validation = await UserModel.store(request.body);
            if (validation === true)
                UserModel.create(request.body).then(user => {
                    let token = Token.generate({
                        "email" : request.body.email
                    });
                    Responder.success(response , {token} ,'ثبت نام با موفقیت انجام شد .')
                })
            else
                Responder.error(response , validation);
        }catch (e) {
            Responder.error(response , e)
        }
    }

    async sign_in(request , response , next){
        try {
            UserModel.findOne({email : request.body.email}).then(user => {
                if (user) {
                    bcrypt.compare(request.body.password , user.password , (error , match) => {
                        if (match){
                            let token = Token.generate({
                                "email" : user.email,
                            });
                            Responder.success(response , {token} ,'ورود با موفقیت انجام شد .')
                        }else{
                            Responder.error(response , { message : "اطلاعات وارد شده صحیح نمی باشد " })
                        }
                    })
                }
                else
                    Responder.error(response , { message : "کاربری با این مشخصات پیدا نشد ." })
            })
        }catch (e) {
            Responder.error(response , e)
        }
    }

    show(request , response , next) {
        Responder.success(response , request.user)
    }

}

export default new UserController();