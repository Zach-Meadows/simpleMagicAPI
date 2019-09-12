const mongoose = require("mongoose");

mongoose.Promise = Promise;

const mongoURI = "mongodb://localhost/mtg-cards"

mongoose
.connect(mongoURI, {useNewUrlParser: true})
.then(instance => {
    console.log(`Connected to db: ${instance.connections[0].name}`)
})
.catch(err => console.log("connection failed", err))

module.exports = mongoose;