require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000,
})
.then(() => {
  console.log('✅ MongoDB connected successfully!');

  app.use('/api/users',         require('./routes/users'));
  app.use('/api/events',        require('./routes/events'));
  app.use('/api/registrations', require('./routes/registrations'));
  app.use('/api/feedback',      require('./routes/feedback'));
  app.use('/api/photos',        require('./routes/photos'));
  app.use('/api/results',       require('./routes/results'));

  app.listen(process.env.PORT, () =>
    console.log(`🚀 Server running on port ${process.env.PORT}`)
  );
})
.catch(err => console.error('❌ Connection failed:', err));
