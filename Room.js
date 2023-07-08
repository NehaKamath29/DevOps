const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomNumber: {
    type: Number,
    required: true
  },
  roomType: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  },
  price_per_room:{
    type:Number,
    required:true
  },
  hotel:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'hotels'
  },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }]
});

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;