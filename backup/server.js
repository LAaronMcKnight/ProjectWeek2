const express = require('express')
const app = express()

//

const Movie = require('./models/movies')
const Card = require('./models/cards')
const Comic = require('./models/comics')
const Game = require('./models/games')
const Misc = require('./models/misc')

//

const mongoose = require('mongoose')

require('dotenv').config()

const methodOverride = require('method-override')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.urlencoded({extended: false}))

app.use(methodOverride("_method"))

app.use((req, res, next) => {
    console.log("I run on all routes")
    next()
})

app.use(express.static("public"))

//

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.once("open", () => {
  console.log("connected to mongodb")
})

/////

app.get('/', (req, res) => {
  res.render('Index')
})

///

app.get('/games', (req, res) => {
  Game.find({}, (err, allGames) => {
      console.log(err)

      res.render('Games', {
          games: allGames
      })
  })
})

app.get('/games/new', (req, res) => {
  res.render('NewGame', {})
})

app.post('/games', (req, res) => {
  if (req.body.negotiable === "on"){
      req.body.negotiable = true;
  }else{
      req.body.negotiable = false;
  }
  Game.create(req.body, (err, createdGame) => {
      console.log(err)
      console.log("Added: ", createdGame)
  })
  res.redirect("/games")
})

///

app.get('/movies', (req, res) => {
  Movie.find({}, (err, allMovies) => {
      console.log(err)

      res.render('Movies', {
          movies: allMovies
      })
  })
})

app.get('/movies/new', (req, res) => {
  res.render('NewMovie', {})
})

app.post('/movies', (req, res) => {
  if (req.body.negotiable === "on"){
      req.body.negotiable = true;
  }else{
      req.body.negotiable = false;
  }
  Movie.create(req.body, (err, createdMovie) => {
      console.log(err)
      console.log("Added: ", createdMovie)
  })
  res.redirect("/movies")
})

///

app.get('/comics', (req, res) => {
  Comic.find({}, (err, allComics) => {
      console.log(err)

      res.render('Comics', {
          comics: allComics
      })
  })
})

app.get('/comics/new', (req, res) => {
  res.render('NewComic', {})
})

app.post('/comics', (req, res) => {
  if (req.body.negotiable === "on"){
      req.body.negotiable = true;
  }else{
      req.body.negotiable = false;
  }
  Comic.create(req.body, (err, createdComic) => {
      console.log(err)
      console.log("Added: ", createdComic)
  })
  res.redirect("/comics")
})

// --------------------FIRST THING: ADD UPDATE AND EDIT PAGES, SEED, Update some CSS (be careful) toy with REACT

app.get('/cards', (req, res) => {
  Card.find({}, (err, allCards) => {
      console.log(err)

      res.render('Cards', {
          cards: allCards
      })
  })
})

app.get('/cards/new', (req, res) => {
  res.render('NewCard', {})
})

app.post('/cards', (req, res) => {
  if (req.body.negotiable === "on"){
      req.body.negotiable = true;
  }else{
      req.body.negotiable = false;
  }
  Card.create(req.body, (err, createdCard) => {
      console.log(err)
      console.log("Added: ", createdCard)
  })
  res.redirect("/cards")
})

//

app.get('/misc', (req, res) => {
  Misc.find({}, (err, allMisc) => {
      console.log(err)

      res.render('Misc', {
          misc: allMisc
      })
  })
})

app.get('/misc/new', (req, res) => {
  res.render('NewMisc', {})
})

app.post('/misc', (req, res) => {
  if (req.body.negotiable === "on"){
      req.body.negotiable = true;
  }else{
      req.body.negotiable = false;
  }
  Misc.create(req.body, (err, createdMisc) => {
      console.log(err)
      console.log("Added: ", createdMisc)
  })
  res.redirect("/misc")
})

//------------

app.delete("/movies/:id", (req, res) => {
  Movie.findByIdAndRemove(req.params.id, (err) => {
      console.log(err)
      res.redirect("/movies")
  })
})
app.delete("/games/:id", (req, res) => {
  Game.findByIdAndRemove(req.params.id, (err) => {
      console.log(err)
      res.redirect("/games")
  })
})
app.delete("/cards/:id", (req, res) => {
  Card.findByIdAndRemove(req.params.id, (err) => {
      console.log(err)
      res.redirect("/cards")
  })
})
app.delete("/comics/:id", (req, res) => {
  Comic.findByIdAndRemove(req.params.id, (err) => {
      console.log(err)
      res.redirect("/comics")
  })
})
app.delete("/misc/:id", (req, res) => {
  Misc.findByIdAndRemove(req.params.id, (err) => {
      console.log(err)
      res.redirect("/misc")
  })
})





// ---------------

app.listen('8000', () => {
  console.log("Listening on Port 8000")
})