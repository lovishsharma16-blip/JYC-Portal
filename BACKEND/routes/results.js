const router = require('express').Router();
const mongoose = require('mongoose');
const ResultSchema = new mongoose.Schema({
  event_key: String, rank: Number, name: String,
  team: String, saved_at: { type: Date, default: Date.now }
});
const Result = mongoose.models.Result || mongoose.model('Result', ResultSchema);
router.get('/', async (req, res) => {
  try {
    const query = req.query.event_key ? { event_key: req.query.event_key } : {};
    res.json(await Result.find(query));
  } catch(e) { res.status(500).json({ error: e.message }); }
});
router.post('/', async (req, res) => {
  try {
    await Result.findOneAndUpdate(
      { event_key: req.body.event_key, rank: req.body.rank },
      req.body, { upsert: true, new: true }
    );
    res.json({ success: true });
  } catch(e) { res.status(500).json({ error: e.message }); }
});
router.delete('/', async (req, res) => {
  try {
    await Result.deleteOne({ event_key: req.query.event_key, rank: req.query.rank });
    res.json({ success: true });
  } catch(e) { res.status(500).json({ error: e.message }); }
});
module.exports = router;
