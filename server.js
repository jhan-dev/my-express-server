const express = require("express")

const app = express()

app.get("/", function(req, res){
    // console.log(request)
    res.send("<h1>Hello World!</h1>")
})

app.get("/contact", function(req, res){
    res.send("Contact me at: jhan.technology@gmail.com")
})

app.get("/about", function(req, res){
    res.send("Hi, my name is Joseph! I'm a Web Developer from Las Vegas!")
})

app.listen(3000, function(){
    console.log("Server started on port 3000")
})

