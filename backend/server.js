const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

// mongoDB connection
const mongoURI = 'mongodb://localhost:27017/recipe_finder';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// routing
const recipeRoutes = require('./api/recipes');
app.use('/api/recipes', recipeRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
