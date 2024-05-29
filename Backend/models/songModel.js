const { default: mongoose } = require("mongoose");
const mongoDB = require("mongoose");

// creating song mongoose schema

const songSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    track: {
        type: String,
        required: true
    },
    artist: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    }
  })

const songModel = new mongoose.model("Song", songSchema);
module.exports = songModel;

