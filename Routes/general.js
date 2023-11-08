import {Router} from "express";
import UserController from "../Controllers/UserController.js";

let routers = Router()

routers.post('/register' , UserController.sign_up)
routers.post('/login' , UserController.sign_in)


export default routers;