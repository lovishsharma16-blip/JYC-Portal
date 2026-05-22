const router = require('express').Router();
const mongoose = require('mongoose');
const PhotoSchema = new mongoose.Schema({
  event_key: String, url: String, photo_type: String,
  filename: String, uploaded_at: { type: Date, default: Date.now }
});
const Photo = mongoose.models.Photo || mongoose.model('Photo', PhotoSchema);
router.get('/', async (req, res) => {
  try {
    const query = req.query.event_key ? { event_key: req.query.event_key } : {};
    res.json(await Photo.find(query));
  } catch(e) { res.status(500).json({ error: e.message }); }
});
router.post('/', async (req, res) => {
  try { res.json(await Photo.create(req.body)); }
  catch(e) { res.status(500).json({ error: e.message }); }
});
module.exports = router;
