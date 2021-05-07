const mongoose = require("mongoose");
const Console = require("./models/Console");
const Game = require("./models/Game");
const Genre = require("./models/Genre");

const uri = 
"mongodb+srv://users:123@cluster0.5gwsk.mongodb.net/konsoleSpel?retryWrites=true&w=majority";

const consoleData = require("./consoleDb.json");
const gameData = require("./gameDb.json");
const genreData = require("./genreDb.json");



mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected ...");
  copyDataToDb();
}).catch((err) => {
  console.log("ERROR: ", err);
})

async function copyDataToDb (){
  await Console.create(consoleData);
  await Game.create(gameData);
  await Genre.create(genreData);
  
  mongoose.connection.close();
}