const router = require('express').Router();
const Event = require('../models/Event');
router.get('/', async (req, res) => {
  try {
    const events = await Event.find({ hidden: { $ne: true } });
    res.json(events);
  } catch(e) { res.status(500).json({ error: e.message }); }
});
router.get('/hidden-builtins', async (req, res) => {
  try {
    const hidden = await Event.find({ name: /^__hidden__/ }, { name: 1 });
    const ids = hidden.map(e => e.name.replace('__hidden__', ''));
    res.json(ids);
  } catch(e) { res.status(500).json({ error: e.message }); }
});
router.post('/hide-builtin', async (req, res) => {
  try {
    await Event.findOneAndUpdate(
      { name: '__hidden__' + req.body.builtin_id },
      { name: '__hidden__' + req.body.builtin_id, hidden: true, sub_title:'hidden', description:'hidden', category:'hidden', event_date:'', event_time:'', fee:0, participation_type:'', color:'#000' },
      { upsert: true, new: true }
    );
    res.json({ success: true });
  } catch(e) { res.status(500).json({ error: e.message }); }
});
router.post('/', async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.json(event);
  } catch(e) { res.status(500).json({ error: e.message }); }
});
router.put('/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(event);
  } catch(e) { res.status(500).json({ error: e.message }); }
});
router.delete('/:id', async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch(e) { res.status(500).json({ error: e.message }); }
});
module.exports = router;
