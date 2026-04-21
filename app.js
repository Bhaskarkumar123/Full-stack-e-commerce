const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// Routes
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/products');
app.use('/api/category', categoryRoutes);
app.use('/api/products', productRoutes);

app.use(cors());
app.use(bodyParser.json());

// Database connection (async, logs status)
mongoose.connect(process.env.MONGO_URI || process.env.CONNECTION_STRING)
  .then(() => {
    console.log('✅ MongoDB Connected!');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
  });

// Connection events
mongoose.connection.on('connected', () => console.log('Mongoose connected'));
mongoose.connection.on('error', (err) => console.error('Mongoose error:', err.message));
mongoose.connection.on('disconnected', () => console.log('Mongoose disconnected'));

// Start server always (DB optional for API structure)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log('DB Status: Check logs above. Fix .env MONGO_URI for full connection.');
});

console.log('Starting server... DB connection attempt in background.');
