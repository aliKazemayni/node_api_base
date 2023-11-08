import Validator from "fastest-validator";

let schema = {
    username : {
        require : true,
        type : "string"
    },
    password : {
        require : true,
        type : "string"
    }
}

export let userStoreValidation = (new Validator()).compile(schema)