const mongoose = require("mongoose");

mongoose.Promise = Promise;

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/mtg-cards";
}

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useFindAndModify: false  })
  .then(instance => {
    console.log(`Connected to db: ${instance.connections[0].name}`);
  })
  .catch(err => console.log("connection failed", err));

module.exports = mongoose;
