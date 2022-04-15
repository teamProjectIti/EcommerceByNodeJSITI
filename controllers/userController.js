const userMode=require("../models/User");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const res = require("express/lib/response");

function findUsers(){
let User=userMode.find({});
   return User;
}
function fineOne(name) {
   var user = userMode.findOne({ name: name });
   return user;
 }
function createUser({name,password,lastName,dob,createdAt,updatedAt}) {
    return  userMode.create({name,password,lastName,dob,createdAt,updatedAt});
    }

   function updateUser(id, name) {
      var newUser = userMode.findOneAndUpdate({ _id: id }, { name: name });
      return newUser;
   }
   //function update
   function updateUser(id, name){
      var newUser = userMode.findOneAndUpdate({ _id: id }, { name: name });
      return newUser;
   }
   async function login({ name, password }) {
      var user = await userMode.findOne({ name: name });
    
      if (user) {
        var valid = await bcrypt.compare(password, user.password);
        if (valid) {
          return jwt.sign(
            {
              name: user.name,
              id: user._id,
            },
            "w6ef77fe7eew6f7ew67",
            { expiresIn: "1h" }
          );
        } else {
          res.status(401).end();
        }
      } else {
        res.status(422).end();
      }
    }

module.exports ={findUsers,createUser,updateUser,fineOne,login}