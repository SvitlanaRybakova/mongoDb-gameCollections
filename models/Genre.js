const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  genre: {type: String},
  console: [{ type: Schema.Types.ObjectId, ref: "Console" }],
});


const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;