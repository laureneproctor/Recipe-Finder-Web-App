const express = require('express');
const router = express.Router();

// Temporary in-memory recipes
const recipes = [
  { id: 1, title: "Spaghetti", cookTime: 30, directions: "Boil Pasta. Add tomato sauce, tomato paste, Italian seasoning, parsley, garlic powder, crushed red pepper, worcestershire, and sugar to the skillet. Stir well to combine and bring to a boil. Add water and stir well. Reduce heat and simmer for 30 minutes. Combine with Pasta." },
  { id: 2, title: "Grilled Cheese", cookTime: 10 , directions: "Toast two slices of bread on a skillet or pan until golden brown. Add a slice of cheese to one slice and press the two slices together to create a sandwich. Let it grill on the pan for another minute and then serve."},
  { id: 3, title: "Grilled Cheese", cookTime: 10 , directions: "Toast two slices of bread on a skillet or pan until golden brown. Add a slice of cheese to one slice and press the two slices together to create a sandwich. Let it grill on the pan for another minute and then serve."},
  { id: 4, title: "Grilled Cheese", cookTime: 10 , directions: "Toast two slices of bread on a skillet or pan until golden brown. Add a slice of cheese to one slice and press the two slices together to create a sandwich. Let it grill on the pan for another minute and then serve."},

];

// GET /api/recipes
router.get('/', (req, res) => {
  res.json(recipes);
});

module.exports = router;
