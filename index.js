const express = require("express");
const fs = require("fs");
var app = express();
const cors=require("cors");
const mongoose=require("mongoose");
// const userModel= require("./models/users")
const http=require("http")
const socket=require("socket.io")


var server =http.createServer(app)
var io=socket(server,{
  cors:{
    origin:"*"
  }
})

 io.on("connection",()=>{
   console.log("connection established")
 })
 app.use(express.json()); //middleware
 app.post("/",(req,res)=>{
       
  io.emit("new_data",req.body)

 })
app.use(cors())
mongoose.connect("mongodb://localhost:27017/Ecommerce",()=>{

  console.log("conected to db")

})
 
// const todoRoute=require("./routes/todoRoute");
// const userRoute=require("./routes/userRoute");

// app.use(express.static("./static"))

// app.use("/userRoute",userRoute);
// app.use("/todoRoute",todoRoute);

app.use("*",(req, res, next) =>{

  res.status(404).end()
})

// app.set("view engine","ejs")
// app.set("views",'./views')

// app.use((err,req,res,next) =>{
//   console.log(err);
//  return res.status(500).end()

// })
server.listen(4000, () => {
  console.log("app started listening on port 4000");
});
