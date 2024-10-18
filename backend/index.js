const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://admin:2003@cluster0.nwsv0.mongodb.net/petAdoptionDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'));

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
