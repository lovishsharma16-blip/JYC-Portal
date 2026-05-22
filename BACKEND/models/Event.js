const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sub_title: String, description: String, category: String,
  event_date: String, event_time: String,
  fee: { type: Number, default: 0 },
  participation_type: String, color: String,
  hidden: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Event', EventSchema);
