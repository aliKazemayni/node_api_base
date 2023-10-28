import express from "express";
import {configs} from "./Config/configs.js";

let app = express()

configs()
app.listen( process.env.PORT || 3000, () => console.log("server in running !!"));