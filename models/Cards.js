const mongoose = require("../db/connection")

const CardSchema = new mongoose.Schema({
    name: String,
    images: Object,
    colors: Array,
    types: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Types"
    },
    Sets: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sets"
    }

})