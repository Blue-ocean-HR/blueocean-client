const axios = require("axios");

// Recipe Routes
exports.getRecipes = (req, res) => {
  let dummyBody = {ingredients: ["chicken"]}
  axios.get('http://localhost:8080/recipes', {data: dummyBody}).then(async (recipes) => {
    let recipesArr = recipes.data;
    let promises = []
    // let result = await Promise.all(
      recipesArr.map(recipe => {
        promises.push(axios.get(`https://api.unsplash.com/search/photos?page=1&query=${recipe.title + ' meal'}&client_id=Jw8aHDiAzilA3nvdb3mvVeEtcXcLaVeNi3chvuBz-0g`))
      })
      Promise.all(promises).then(data => {
        for (let i = 0; i < recipesArr.length; i++) {
          recipesArr[i].url = data[i].data.results[0].urls.small
        }
        console.log(recipesArr)
        res.send(recipesArr)
      })
    // res.send(recipes.data)
  }).catch(error => console.log(error))
}

// const getPictures = async (arr) => {
//   await for (let i = 0; i < arr.length; i++) {
//     console.log('test', arr[i].title)
//     axios.get(`https://api.unsplash.com/search/photos?page=1&query=${arr[i].title}&client_id=Jw8aHDiAzilA3nvdb3mvVeEtcXcLaVeNi3chvuBz-0g`).then(pictures => {
//       console.log(pictures.data.results[0].urls.full)
//     }).catch(error => console.log(error))
//   }
//   return arr;
// }



// User routes
exports.addUser = (req, res) => {
  axios.post('http://localhost:8080/users', {email: req.body.email}).then(data => {
    res.sendStatus(200)
  }).catch(error => {
    res.sendStatus(500)
    console.log(error)
  })
}

// Pantry Routes
exports.addPantryItem = (req, res) => {
  axios.post('http://localhost:8080/pantry', req.body).then(data => {
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
  console.log(req.body)
  axios.delete('http://localhost:8080/pantry', {data: {id: req.body.id}}).then(data => {
    res.sendStatus(200)
  }).catch(error => {
    res.sendStatus(500)
    console.log(error)
  })
}
// Sample request from React
//  axios.delete('/pantry', {data: {id: 4}}).then(data => console.log(data)).catch(error => console.log(error))

exports.updatePantryItem = (req, res) => {
  axios.put('http://localhost:8080/pantry', req.body).then(data => {
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
  axios.get('http://localhost:8080/pantry', {params: req.query}).then(data => {
    res.send(data.data)
  }).catch(error => {
    res.sendStatus(500)
    console.log(error)
  })
}
// Sample request from React
// axios.get('/pantry', {params: {email: "max.philip1@gmail.com"}}).then(data => console.log(data)).catch(error => console.log(error))

exports.getFavorites = (req, res) => {
  axios.get('http://localhost:8080/favorite', {params: {email: req.query.email}}).then(favorites => {
    res.send(favorites.data)
  }).catch(error => {
    res.sendStatus(500)
    console.log(error)
  })
}

exports.deleteFavorite = (req, res) => {
  console.log('delete', req.query)
  axios.delete('http://localhost:8080/favorite', {data: req.query}).then(data => {
    res.sendStatus(200)
  }).catch(error => {
    res.sendStatus(500)
    console.log(error)
  })
}

exports.addFavorite = (req, res) => {
  console.log(req.body)
  axios.post('http://localhost:8080/favorite', req.body).then(data => {
    res.sendStatus(200)
  }).catch(error => {
    res.sendStatus(500)
    console.log(error)
  })
}

exports.getIngredients = (req, res) => {
  axios.get('http://localhost:8080/ingredients').then(data => {
    res.send(data.data)
  }).catch(error => {
    res.sendStatus(500)
    console.log(error)
  })
}