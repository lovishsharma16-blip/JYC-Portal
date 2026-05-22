const router = require('express').Router();
const mongoose = require('mongoose');
const FeedbackSchema = new mongoose.Schema({
  student_name: String, student_id: String, email: String, phone: String,
  event_related: String, feedback_type: String, message: String,
  status: { type: String, default: 'unread' }, admin_reply: String,
  submitted_at: { type: Date, default: Date.now }
});
const Feedback = mongoose.models.Feedback || mongoose.model('Feedback', FeedbackSchema);
router.get('/', async (req, res) => {
  try { res.json(await Feedback.find().sort({ submitted_at: -1 })); }
  catch(e) { res.status(500).json({ error: e.message }); }
});
router.post('/', async (req, res) => {
  try { res.json(await Feedback.create(req.body)); }
  catch(e) { res.status(500).json({ error: e.message }); }
});
router.put('/:id', async (req, res) => {
  try { res.json(await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true })); }
  catch(e) { res.status(500).json({ error: e.message }); }
});
router.delete('/:id', async (req, res) => {
  try { await Feedback.findByIdAndDelete(req.params.id); res.json({ success: true }); }
  catch(e) { res.status(500).json({ error: e.message }); }
});
module.exports = router;
