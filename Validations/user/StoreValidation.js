import Validator from "fastest-validator";

let schema = {
    username : {
        type : "string"
    }
}

export let userStoreValidation = (new Validator()).compile(schema)