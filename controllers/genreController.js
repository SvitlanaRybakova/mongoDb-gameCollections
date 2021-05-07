const Genre = require("../models/Genre");

const getAllGenres = async (req, res) => {
  let genres = await Genre.find().exec();
  res.json(genres);
}

module.exports = {
  getAllGenres,
}