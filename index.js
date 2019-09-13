// require all necessary functions
const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");

//implement parser
app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

//require routes
app.use(require("./routes/main.js"));

app.listen(3000, () => console.log("listening on port 3000"));
