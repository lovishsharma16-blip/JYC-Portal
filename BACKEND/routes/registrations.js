const router = require('express').Router();
const Registration = require('../models/Registration');
router.get('/', async (req, res) => {
  try {
    const query = req.query.student_id ? { student_id: req.query.student_id } : {};
    const regs = await Registration.find(query).sort({ created_at: -1 });
    res.json(regs);
  } catch(e) { res.status(500).json({ error: e.message }); }
});
router.post('/', async (req, res) => {
  try {
    const reg = await Registration.create(req.body);
    res.json(reg);
  } catch(e) { res.status(500).json({ error: e.message }); }
});
router.put('/by-sid/:sid', async (req, res) => {
  try {
    await Registration.updateMany({ student_id: req.params.sid }, req.body);
    res.json({ success: true });
  } catch(e) { res.status(500).json({ error: e.message }); }
});
router.put('/:id', async (req, res) => {
  try {
    const reg = await Registration.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(reg);
  } catch(e) { res.status(500).json({ error: e.message }); }
});
router.delete('/:id', async (req, res) => {
  try {
    await Registration.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch(e) { res.status(500).json({ error: e.message }); }
});
module.exports = router;
