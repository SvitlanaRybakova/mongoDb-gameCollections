const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  game: {type: String},
  genre: { type: Schema.Types.ObjectId, ref: "Genre" },
  console: { type: Schema.Types.ObjectId, ref: "Console" },
});


const Game = mongoose.model("Game", gameSchema);

module.exports = Game;