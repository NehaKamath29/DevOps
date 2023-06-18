const mongoose=require("mongoose")

const customerSchema=new mongoose.Schema({
    cust_id:{
        type: Number,
        required: true,
        unique:true
    },
    cust_first_name:{
        type:String,
        required:true
    },
    cust_last_name:{
        type:String
    },
    
    email: {
        type:String,
        required:true,
        unique: true
    },
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    }


})


















const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['admin', 'receptionist', 'manager'],
      default: 'receptionist'
    }
  });
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;