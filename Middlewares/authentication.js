import JsonWebToken from "jsonwebtoken";
import {UserModel} from "../Models/User.js";
import Responder from "../Helpers/Responder.js";

export let authentication = (req , res , next) => {
    let token = req.headers.authorization
    if (token){
        JsonWebToken.verify(token.split(" ")[1], process.env.JWT_SECRET, async (err, value) => {
            if (err) return res.status(500).json({error: req.t('authentication_failed')})
            req.user = await UserModel.findOne({email: value.email}).select(['email', 'username'])
            next()
        })
    }else {
        return Responder.error(res , {message : req.t('token')})
    }
}