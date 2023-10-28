import {configDotenv} from "dotenv";
import {paths} from "./paths.js";
import {connection} from "./database.js";

export let configs = (app) => {

    configDotenv({path : paths.general.env})
    connection()

}