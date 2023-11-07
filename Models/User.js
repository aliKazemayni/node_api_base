import {Schema , model} from "mongoose";
import bcrypt from "bcrypt";
import {userStoreValidation} from "../Validations/user/StoreValidation.js";

let UserSchema = Schema(
    {
        username : {
            type : String,
            trim : true,
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

UserSchema.statics.storeValidation = function (body) {
    return userStoreValidation(body)
}

export let UserModel = model('users' , UserSchema)