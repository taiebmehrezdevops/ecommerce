const mongoose=require("mongoose")
const schema=mongoose.Schema

const CartSchema=new schema({

  userId:{type:String, required:true},
  
  products:[
      {
        product:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
        qte:{
            type:Number,
            default:1,
        },
      },
  ],
},
{ timestamps:true}   
);

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;