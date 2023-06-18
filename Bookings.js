const mongoose=require("mongoose")
console.log("Hi")
const bookingSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    checkInDate: {
      type: Date,
      required: true
    },
    checkOutDate: {
      type: Date,
      required: true
    }
});

const Booking = mongoose.model('Booking_details', bookingSchema);
module.exports = Booking;







