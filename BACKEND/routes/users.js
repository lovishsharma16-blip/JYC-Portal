const router = require('express').Router();
const User = require('../models/User');
router.get('/', async (req, res) => {
  try {
    const query = req.query.student_id ? { student_id: req.query.student_id } : {};
    const users = await User.find(query);
    res.json(users);
  } catch(e) { res.status(500).json({ error: e.message }); }
});
router.post('/register', async (req, res) => {
  try {
    const existing = await User.findOne({ email: req.body.email });
    if(existing) return res.status(400).json({ error: 'Account already exists. Please log in.' });
    const user = await User.create(req.body);
    res.json(user);
  } catch(e) { res.status(400).json({ error: e.message }); }
});
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email, password: req.body.password });
    if(!user) return res.status(401).json({ error: 'Incorrect Student ID or password.' });
    res.json(user);
  } catch(e) { res.status(500).json({ error: e.message }); }
});
router.post('/upsert', async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { student_id: req.body.student_id },
      req.body,
      { upsert: true, new: true }
    );
    res.json(user);
  } catch(e) { res.status(500).json({ error: e.message }); }
});
router.put('/by-sid/:sid', async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { student_id: req.params.sid },
      req.body,
      { new: true }
    );
    res.json(user);
  } catch(e) { res.status(500).json({ error: e.message }); }
});
module.exports = router;
