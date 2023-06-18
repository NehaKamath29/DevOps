const mongoose=require("mongoose")

const hotel_schema= new mongoose.Schema({
    hotel_name:{
        type:String,
        required:true
    },
    hotel_adress:{
        type:String,
        required:true
    }
});
const hotels=mongoose.model("Hotel_details",hotel_schema);
module.exports=hotels;