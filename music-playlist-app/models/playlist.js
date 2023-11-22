const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, maxlength: 100},
    mood: { type: String, enum: ["Chill", "Upbeat", "Study", "Workout", 
    "Roadtrip", "Romantic", "Feel-good", "Nostalgic", "Cozy", "Sad"] },
    songs: [{ 
        type: Schema.Types.ObjectId,
        ref: "Song"
    }],
    likes: { type: Number }
})

module.exports = mongoose.model("Playlist", playlistSchema)