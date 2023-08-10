const express=require("express")
const router=express.Router()
const Cart=require('../models/Cart')
const isAuth=require('../middleware/isAuth')
//add new product
router.post('/addtocart',async(req,res)=>{
    const {products,timestamps}=req.body
    try{
    const newCart=new Cart({user:req.user,products,timestamps})
    const cart = await newCart.save()
    res.send({msg:"Cart added",cart})
    }
    catch(error){
        console.log(error)
    }
})
module.exports=router