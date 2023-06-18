const mongoose=require("mongoose")

const paymentSchema=new mongoose.Schema({
    amount:{
        type:Number,
        required:true
    }
});

const payment=mongoose.model("Payment_details",hotel_schema);
module.exports=payment;