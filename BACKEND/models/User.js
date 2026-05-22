const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name:           { type: String, required: true },
  email:          { type: String, required: true, unique: true },
  password:       { type: String, required: true },
  student_id:     { type: String, unique: true, sparse: true },
  branch:         String,
  phone:          String,
  role:           { type: String, default: 'member' },
  avatar_color:   String,
  wins:           { type: Array, default: [] },
  streak_broken:  { type: Boolean, default: false },
  missed_count:   { type: Number, default: 0 },
  auth_id:        String,
  created_at:     { type: Date, default: Date.now }
});
module.exports = mongoose.model('User', UserSchema);
