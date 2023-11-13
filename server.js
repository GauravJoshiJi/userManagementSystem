const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const app = express();
const path = require("path");
// const mongoose = require("mongoose");

const connectDB = require("./server/database/connection");
//1> config.env
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//2>log requrest
app.use(morgan("tiny"));

//mongodb connection
connectDB();

//3.1>parser request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

//3.2>Set view engine
app.set("view engine", "ejs");

//3.3>load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

//load routers
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
