

const express = require('express');
const app = express();
const SERVICE_NAME = process.env.SERVICE_NAME || 'cloud-platform-api';

app.use(express.json());

// Health check endpoint

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: SERVICE_NAME
  });
});
// Simple in-memory data store
let items = [];

// Get items
app.get('/items', (req, res) => {
  res.json(items);
});

// Add item
app.post('/items', (req, res) => {
  const item = req.body;
  items.push(item);
  res.status(201).json(item);
});

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Service ${SERVICE_NAME} running on port 3000`);
});
