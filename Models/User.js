import {Schema , model} from "mongoose";
import bcrypt from "bcrypt";
import {userStoreValidation} from "../Validations/user/StoreValidation.js";

let UserSchema = Schema(
    {
        username : {
            type : String,
            trim : true,
            unique : true,
            required : true
        },
        email : {
            type : String,
            required : true,
            unique : true
        },
        password : {
            type : String,
            required : true,
            minLength : 4
        }
    },
    {
        timestamps : true
    }
);

UserSchema.pre("save" , function (next) {
    let user = this;
    if (!user.isModified("password")) return  next()
    bcrypt.hash(user.password , 10 , async function (error , hash) {
        if (error) return next(error)
        user.password = hash;
        next();
    })
})

UserSchema.statics.store = async function (body) {
    let email = await UserModel.find({email : body.email}).count()
    let username = await UserModel.find({username : body.username}).count()
    if (email !== 0 || username !== 0)
        return {
            duplicate : "این کاربر در سامانه موجود می باشد"
        }
    return userStoreValidation(body)
}

export let UserModel = model('users' , UserSchema)