import {configDotenv} from "dotenv";
import {paths} from "./paths.js";

export let configs = () => {

    configDotenv({path : paths.general.env})

}