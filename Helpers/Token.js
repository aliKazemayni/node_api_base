import JsonWebToken from "jsonwebtoken";

class Token{

    generate(user){
        return JsonWebToken.sign(user , process.env.JWT_SECRET)
    }

    get_user(){

    }

}

export default new Token();