import { Router } from "express";
import getMessageForm from "../controllers/get_new_message_form.js";
import postMessages from "../controllers/post_new_messages.js";

const newRoute = Router()


newRoute.get("/",getMessageForm)
newRoute.post("/",postMessages)

export default newRoute