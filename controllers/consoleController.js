const Console = require("../models/Console");

const getAllConsoles = async (req, res) => {
  let consoles = await Console.find().exec();
  res.json(consoles);
}

module.exports ={
  getAllConsoles,
}