const mongoose=require("mongoose")

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
    },
    guest: { type: mongoose.Schema.Types.ObjectId, ref: 'cust' },
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'hotels' }
});

const Booking = mongoose.model('Booking_details', bookingSchema);
module.exports = Booking;







