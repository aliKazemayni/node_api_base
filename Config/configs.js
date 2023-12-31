import express from "express";
import {configDotenv} from "dotenv";

import {dir_path, paths} from "./paths.js";
import {connection} from "./database.js";

import api_routes from "../Routes/api.js";
import general_routes from "../Routes/general.js";

import {authentication} from "../Middlewares/authentication.js";
import {localization} from "./localization.js";

export let configs = (app) => {

    configDotenv({path : paths.general.env})
    connection()
    localization(app)

    app.use(express.json());
    app.use('/' , general_routes)
    app.use('/api' , authentication , api_routes)

}