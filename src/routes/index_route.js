import { Router } from "express";
import getIndexPage from "../controllers/get_index_page.js";
import messages from "../models/messages.js";


const indexRoute = Router()


indexRoute.use((req,res,next)=>
{
    res.locals = {...res.locals,messages,title:"Mini Messageboard"}
    console.log(res.locals)
    next()
})

indexRoute.get("/",getIndexPage)


export default indexRoute