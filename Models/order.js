const mongoose = require('mongoose');
// const bcrypt=require('bcryptjs');

const orderSchema=mongoose.Schema({
     
    Totalprice:{
        type:number,
        required:[true,'must be enter price'],
    }, 
     
    createdAt:{
        type:Date,
        default:Date.now
    },
    SellerId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "seller",
        required: true,
      },
       SellerId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "seller",
        required: true,
      },
      productId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "product",
        required: true,
      },
});

let orderModel=mongoose.model("order",orderSchema);
module.exports=orderModel;