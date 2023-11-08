import {Router} from "express";
import UserController from "../Controllers/UserController.js";

let routers = Router()

routers.post('/show' , UserController.show)

export default routers;