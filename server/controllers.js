const axios = require("axios");

const getRecipes = (req, res) => {
  let dummyBody = {ingredients: ["chicken"]}
  axios.get('http://localhost:8080/recipes', {data: dummyBody}).then(recipes => {
    console.log(recipes)
    res.send(recipes.data)
  }).catch(error => console.log(error))
}


module.exports.getRecipes = getRecipes
