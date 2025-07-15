const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Heading = require('./models/Heading');
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// GET Heading
app.get('/api/heading', async (req, res) => {
  const heading = await Heading.findOne();
  res.json(heading || { text: 'Default Heading' });
});

// POST Heading
app.post('/api/heading', async (req, res) => {
  const { text } = req.body;
  let heading = await Heading.findOne();
  if (heading) {
    heading.text = text;
    await heading.save();
  } else {
    heading = await Heading.create({ text });
  }
  res.json(heading);
});

app.listen(5000, () => console.log('Server running on port 5000'));
