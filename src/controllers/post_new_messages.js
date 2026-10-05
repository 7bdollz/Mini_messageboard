const postMessages=(req,res)=>
{
    let nextId = 2
    const newMessage = req.body
    newMessage.id = ++nextId
    newMessage.added = new Date().toLocaleDateString()
    const messages = res.locals.messages
    messages.push(newMessage)
    console.log(messages)
    res.redirect("/")
}

export default postMessages