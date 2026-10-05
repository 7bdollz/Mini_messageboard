const getMessage =(req,res)=>
{
    const id = req.params.id
    const messages = res.locals.messages
    const message = messages.find((m)=>m.id === Number(id))
    res.render("message_page",{message:message})
    console.log(message)
}

export default getMessage