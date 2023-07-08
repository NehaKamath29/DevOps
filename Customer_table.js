const mongoose=require("mongoose")

const customerSchema=new mongoose.Schema({
    username: {
      type: String,
      required:true,
      unique:true
    },
    cust_name: {
      type:String,
      required:true
    },
    email: {
        type:String,
        required:true,
        unique: true
    },
    password: {
      type:String,
      required:true,
      unique:true
    },
    payment:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'payment'
    },
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }]
});

const cust=mongoose.model("Customer_details",customerSchema);
module.exports=cust;


















