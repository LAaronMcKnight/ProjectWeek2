const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    name: {type:String, required: true},
    condition: {type:String, required: true},
    price: {type:String, required: true},
    negotiable: Boolean,
    description: {type:String, required: true},
    image: {type:String, required: true}
})

const Game = mongoose.model("Game", gameSchema)

module.exports = Game