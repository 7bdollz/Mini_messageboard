import { Router } from "express";
import getMessage from "../controllers/get_message.js";

const messageRoute = Router()

messageRoute.get("/:id",getMessage)

export default messageRoute