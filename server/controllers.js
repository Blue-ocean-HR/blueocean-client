const axios = require("axios");

// Recipe Routes
exports.getRecipes = (req, res) => {
  let dummyBody = {ingredients: ["egg"]}
  axios.get('http://localhost:3000/recipes', {data: dummyBody}).then(recipes => {
    res.send(recipes.data)
  }).catch(error => console.log(error))
}


// User routes
exports.addUser = (req, res) => {
  axios.post('http://localhost:3000/users', {email: req.body.email}).then(data => {
    res.sendStatus(200)
  }).catch(error => {
    res.sendStatus(500)
    console.log(error)
  })
}

// Pantry Routes
exports.addPantryItem = (req, res) => {
  axios.post('http://localhost:3000/pantry', req.body).then(data => {
    res.sendStatus(200)
  }).catch(error => {
    res.sendStatus(500)
    console.log(error)
  })
}
/* Sample Request from React
    let item = {email: "max.philip1@gmail.com", name: "chicken", date: new Date().getTime(), category: "protein"}
    axios.post('/pantry', item).then(data => console.log(data)).catch(error => console.log(error))
*/
//
exports.deletePantryItem = (req, res) => {
  axios.delete('http://localhost:3000/pantry', {data: {id: req.body.id}}).then(data => {
    res.sendStatus(200)
  }).catch(error => {
    res.sendStatus(500)
    console.log(error)
  })
}
// Sample request from React
//  axios.delete('/pantry', {data: {id: 4}}).then(data => console.log(data)).catch(error => console.log(error))

exports.updatePantryItem = (req, res) => {
  axios.put('http://localhost:3000/pantry', req.body).then(data => {
    res.sendStatus(200)
  }).catch(error => {
    res.sendStatus(500)
    console.log(error)
  })
}
// Sample request from React
// axios.put('/pantry', {name: "", date: 1234, id: 5}).then(data => console.log(data)).catch(error => console.log(error))

exports.getPantryItems = (req, res) => {
  console.log('pantry', req.query)
  axios.get('http://localhost:3000/pantry', {params: req.query}).then(data => {
    res.send(data.data)
  }).catch(error => {
    res.sendStatus(500)
    console.log(error)
  })
}
// Sample request from React
// axios.get('/pantry', {params: {email: "max.philip1@gmail.com"}}).then(data => console.log(data)).catch(error => console.log(error))

exports.getFavorites = (req, res) => {
  axios.get('http://localhost:3000/favorite', {params: {email: req.query.email}}).then(favorites => {
    res.send(favorites.data)
  }).catch(error => {
    res.sendStatus(500)
    console.log(error)
  })
}

exports.deleteFavorite = (req, res) => {
  console.log('delete', req.query)
  axios.delete('http://localhost:3000/favorite', {data: req.query}).then(data => {
    res.sendStatus(200)
  }).catch(error => {
    res.sendStatus(500)
    console.log(error)
  })
}

exports.addFavorite = (req, res) => {
  console.log(req.body)
  axios.post('http://localhost:3000/favorite', req.body).then(data => {
    res.sendStatus(200)
  }).catch(error => {
    res.sendStatus(500)
    console.log(error)
  })
}

exports.getIngredients = (req, res) => {
  axios.get('http://localhost:3000/ingredients').then(data => {
    res.send(data.data)
  }).catch(error => {
    res.sendStatus(500)
    console.log(error)
  })
}