const Genre = require("../models/Genre");

const getAllGenres = async (req, res) => {
  req.query.populate = req.query.populate === "true" ? true : false;

  if (req.query.populate) {
    let genres = await Genre.find().populate("game").exec();
    res.json(genres);
    return;
  }
  let genres = await Genre.find().exec();
  res.json(genres);
};

module.exports = {
  getAllGenres,
};
