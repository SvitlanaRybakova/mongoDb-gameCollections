const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3001;

const uri = 
"mongodb+srv://users:123@cluster0.5gwsk.mongodb.net/konsoleSpel?retryWrites=true&w=majority";

const consoleRoutes = require("./routes/consoleRoutes");
const genreRoutes = require("./routes/genreRoutes");

// makes the req.body available to us Нужен для POST запросов
app.use(express.json());

// database connection
mongoose.connect(uri, {
  // todo see meaning
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected ...");
}).catch((err) => {
  console.log("ERROR: ", err);
})

app.use("/api/v1/consols", consoleRoutes);
app.use("/api/v1/genres", genreRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
