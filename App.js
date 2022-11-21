const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const users = require("./models/users.model");
const usersRouter = require("./routes/users.route");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", usersRouter);

//home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// when route not found
app.use((req, res, next) => {
  res.status(404).send("<h1>404!! Invalid Request</h1>");
});

//when server error
app.use((err, req, res, next) => {
  res.status(505).json({
    message: "Something broke",
  });
});

module.exports = app;
