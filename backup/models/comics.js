const mongoose = require('mongoose')

const comicSchema = new mongoose.Schema({
    name: {type:String, required: true},
    condition: {type:String, required: true},
    price: {type:String, required: true},
    negotiable: Boolean,
    description: {type:String, required: true},
    image: {type:String, required: true}
})

const Comic = mongoose.model("Comic", comicSchema)

module.exports = Comic