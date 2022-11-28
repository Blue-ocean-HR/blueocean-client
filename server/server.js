const express = require("express");
const path = require('path');
const cors = require('cors');
const https = require('https')
const { getRecipes, addUser, addPantryItem,
   deletePantryItem, updatePantryItem, getPantryItems,
    getFavorites, addFavorite, deleteFavorite, getIngredients } = require("./controllers.js")

const PORT = process.env.PORT || 3001;

const app = express();

// Serve the files for production
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())
// Routes to recipes database
app.get('/recipes', getRecipes)

// Users
app.post('/users', addUser)

// Pantry
app.get('/pantry', getPantryItems)
app.post('/pantry', addPantryItem)
app.delete('/pantry', deletePantryItem)
app.put('/pantry', updatePantryItem)

// Favorites
app.get('/favorite', getFavorites)
app.post('/favorite', addFavorite)
app.delete('/favorite', deleteFavorite)
// Ingredients
app.get('/ingredients', getIngredients)

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});
// direct all requested routes to index.html to let react router handle them
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
  });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
