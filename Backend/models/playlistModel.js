const { default: mongoose } = require("mongoose");
const mongoDB = require("mongoose");

// creating playlist mongoose schema

const playlistSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    songs: [{
        type: mongoose.Types.ObjectId,
        ref: "song"
    }],
    collaborators: [{
        type: mongoose.Types.ObjectId,
        ref: "user"
    }]
  })

const playlistModel = new mongoose.model("Playlist", songSchema);
module.exports = playlistModel;

