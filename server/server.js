const express = require("express");
const path = require('path');
const { getRecipes, addUser, addPantryItem,
   deletePantryItem, updatePantryItem, getPantryItems } = require("./controllers.js")

const PORT = process.env.PORT || 3001;

const app = express();

// Serve the files for production
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Routes to recipes database
app.get('/recipes', getRecipes)

// Users
app.post('/users', addUser)

// Pantry
app.get('/pantry', getPantryItems)
app.post('/pantry', addPantryItem)
app.delete('/pantry', deletePantryItem)
app.put('/pantry', updatePantryItem)


// direct all requested routes to index.html to let react router handle them
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
