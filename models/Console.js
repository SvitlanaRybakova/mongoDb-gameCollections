const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const consoleSchema = new Schema({
  make: { type: String },
  model: { type: String },
  year: { type: String },
  game:[{type: Schema.Types.ObjectId, ref: "Game", default: null }]
});

const Console = mongoose.model("Console", consoleSchema);

module.exports = Console;