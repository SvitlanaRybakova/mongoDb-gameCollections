const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  genre: {type: String},
  console: [{ type: Schema.Types.ObjectId, ref: "Console" }],
  game:[{type: Schema.Types.ObjectId, ref: "Game", default: null }]
});


const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;