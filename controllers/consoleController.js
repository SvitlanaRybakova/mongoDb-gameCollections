const Console = require("../models/Console");

const getAllConsoles = async (req, res) => {
  req.query.populate = req.query.populate === "true" ? true : false;

  if (req.query.populate) {
    let consoles = await Console.find().populate("game").exec();
    res.json(consoles);
    return;
  }
  let consoles = await Console.find().exec();
  res.json(consoles);
};

module.exports = {
  getAllConsoles,
};
