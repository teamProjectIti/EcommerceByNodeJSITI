const mongoose = require('mongoose');

const cartSchema=mongoose.Schema({
    
    USerId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user",
        required: true,
      },
      productID: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "product",
        required: true,
      }],
});
var cartModel=mongoose.model("cart",cartSchema);
module.exports=cartModel;