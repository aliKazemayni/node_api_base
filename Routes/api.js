import {Router} from "express";
import UserController from "../Controllers/UserController.js";

let routers = Router()

routers.get('/user' , UserController.show)


export default routers;