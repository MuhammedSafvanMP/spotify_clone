const { default: mongoose } = require("mongoose");
const mongoDB = require("mongoose");

// creating user mongoose schema

const userSchema  = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    likedSongs: {
        type: String,
        default: "",
    },
    likedPlaylists: {
        type: String,
        default: ""
    },
    subscribedArtists: {
        type: String,
        default: ""
    }
})

const userModel = new mongoose.model("User", userSchema);
module.exports = userModel;

