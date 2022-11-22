const express = require("express");
const axios = require("axios");
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

// Serve the files for production
app.use(express.static(path.resolve(__dirname, './dist')));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/recipes', (req, res) => {
  let dummyBody = {ingredients: ["chicken"]}
  axios.get('http://localhost:8080/recipes', {data: dummyBody}).then(data => {
    console.log(data)
    res.send(data.data)
  }).catch(error => console.log(error))
})
// direct all requested routes to index.html to let react router handle them
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './dist', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
