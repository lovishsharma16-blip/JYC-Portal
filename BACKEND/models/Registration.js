const mongoose = require('mongoose');
const RegistrationSchema = new mongoose.Schema({
  student_id:     String,
  student_name:   String,
  branch:         String,
  email:          String,
  event_id:       mongoose.Schema.Types.Mixed,
  event_name:     String,
  event_date:     String,
  fee_paid:       Number,
  original_fee:   Number,
  discount_pct:   Number,
  streak_count:   Number,
  streak_broken:  { type: Boolean, default: false },
  missed_count:   { type: Number, default: 0 },
  status:         { type: String, default: 'confirmed' },
  registered_at:  { type: Date, default: Date.now },
  created_at:     { type: Date, default: Date.now }
});
module.exports = mongoose.model('Registration', RegistrationSchema);
