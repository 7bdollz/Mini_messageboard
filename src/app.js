import express from "express"
import path from "path"
import indexRoute from "./routes/index_route.js"
import newRoute from "./routes/new_messages_route.js"
import messageRoute from "./routes/message_route.js"

const port = process.env.PORT
//create an express app and add views
const app = express()
app.set("views",path.join(import.meta.dirname,"views"))
app.set("view engine","ejs")
app.use(express.static(path.join(import.meta.dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.use((req,res,next)=>
{
    res.locals.title = "Mini Messageboard"
    next()
})
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

//add routers to app
app.use("/",indexRoute)
app.use("/new",newRoute)
app.use("/message",messageRoute)
app.listen(port,()=>
{
    console.log(`server live on port:${port}`)
})
