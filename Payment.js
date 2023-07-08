const mongoose=require("mongoose")

const paymentSchema=new mongoose.Schema({
    amount:{
        type:Number,
        required:true
    },
    custId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'cust'
    },
    hotelId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'hotel'
    }
});

const payment=mongoose.model("Payment_details",hotel_schema);
module.exports=payment;