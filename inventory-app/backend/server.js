const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// connect to MongoDB
mongoose.connect('mongodb://localhost/fleaMarketDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (req, res) => {
  res.send('Flea Market App Backend Running');
});

// start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
