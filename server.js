// server.js - Local Food API

const express = require('express');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost/local_food_api', {})
  .then(() => {
    console.log('Connected to MongoDB');
    seedData(); // Seed sample data after connecting
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Define Ingredient Schema and Model
const ingredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  region: String,
}, { timestamps: true });
const Ingredient = mongoose.model('Ingredient', ingredientSchema);

// Define Recipe Schema and Model
const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }],
  steps: { type: String, required: true },
  region: String,
  dietaryInfo: String,
}, { timestamps: true });
const Recipe = mongoose.model('Recipe', recipeSchema);

// Define Restaurant Schema and Model
const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  cuisine: String,
  contactInfo: String,
}, { timestamps: true });
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

// Seed Sample Data Function
const seedData = async () => {
  try {
    const existingIngredients = await Ingredient.find();
    if (existingIngredients.length === 0) {
      await Ingredient.insertMany([
        { name: "Tomato", description: "A juicy red fruit used in salads and cooking", region: "Mediterranean" },
        { name: "Cumin", description: "Aromatic spice often used in curries and stews", region: "Middle East" },
        { name: "Cassava", description: "A starchy root vegetable popular in African cuisines", region: "Africa" }
      ]);
      console.log("Sample ingredients added to the database");
    }
    
    const ingredients = await Ingredient.find();
    const existingRecipes = await Recipe.find();
    if (existingRecipes.length === 0 && ingredients.length > 0) {
      await Recipe.insertMany([
        { name: "Spicy Cassava", ingredients: [ingredients[2]._id], steps: "Peel and boil cassava, then fry with spices.", region: "Africa", dietaryInfo: "Vegan" },
        { name: "Tomato Salad", ingredients: [ingredients[0]._id], steps: "Chop tomatoes and mix with herbs.", region: "Mediterranean", dietaryInfo: "Vegetarian" }
      ]);
      console.log("Sample recipes added to the database");
    }
    
    const existingRestaurants = await Restaurant.find();
    if (existingRestaurants.length === 0) {
      await Restaurant.insertMany([
        { name: "Local Spice", location: "Cairo, Egypt", cuisine: "Middle Eastern", contactInfo: "123-456-7890" },
        { name: "Fresh Harvest", location: "Nairobi, Kenya", cuisine: "African", contactInfo: "987-654-3210" }
      ]);
      console.log("Sample restaurants added to the database");
    }
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

// Define Routes for Ingredients
app.get('/ingredients', async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/ingredients/:id', async (req, res) => {
  try {
    const ingredient = await Ingredient.findById(req.params.id);
    if (!ingredient) {
      return res.status(404).send('Ingredient not found');
    }
    res.json(ingredient);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/ingredients', async (req, res) => {
  try {
    const ingredient = new Ingredient(req.body);
    const savedIngredient = await ingredient.save();
    res.status(201).json(savedIngredient);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Define Routes for Recipes
app.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find().populate('ingredients');
    res.json(recipes);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/recipes/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate('ingredients');
    if (!recipe) {
      return res.status(404).send('Recipe not found');
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/recipes', async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    const savedRecipe = await recipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Define Routes for Restaurants
app.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/restaurants/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).send('Restaurant not found');
    }
    res.json(restaurant);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/restaurants', async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    const savedRestaurant = await restaurant.save();
    res.status(201).json(savedRestaurant);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Start Server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
