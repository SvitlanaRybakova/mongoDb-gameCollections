const Game = require("../models/Game");
const Console = require("../models/Console");
const Genre = require("../models/Genre");

const getAllGames = async (req, res) => {
  req.query.populate = req.query.populate === "true" ? true : false;

  if (req.query.populate){
    let games = await Game.find().populate("console genre").exec();
    res.json(games);
    return;

  } 
    let games = await Game.find().exec();
  res.json(games);
};

const addConsoleToGame = async (req, res) => {
  let game;
  let gameConsole;

  try {
    game = await Game.findById(req.body.gameId);
    gameConsole = await Console.findById(req.body.consoleId);
  } catch (err) {
    res.send("somethig went wrong");
    return;
  }

  game.console = gameConsole._id;
  gameConsole.game.push(game._id);

  await game.save();
  await gameConsole.save();

  res.json({ game, gameConsole });
};

const addGenreToGame = async (req, res) => {
  let game;
  let genre;

  try {
    game = await Game.findById(req.body.gameId);
    genre = await Genre.findById(req.body.genreId);
  } catch (err) {
    res.send("somethig went wrong");
    return;
  }

  game.genre = genre._id;
  genre.game.push(game._id);

  await game.save();
  await genre.save();

  res.json({ game, genre });
};

module.exports = {
  addConsoleToGame,
  addGenreToGame,
  getAllGames,
};
