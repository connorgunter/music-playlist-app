const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 25 },
    description: { type: String, required: true, maxlength: 100 },
    mood: {
      type: String,
      enum: [
        "Chill",
        "Upbeat",
        "Study",
        "Workout",
        "Roadtrip",
        "Romantic",
        "Feel-good",
        "Nostalgic",
        "Cozy",
        "Sad",
      ],
    },
    songs: [
      {
        name: String,
        artist: String,
        url: String,
      },
    ],
    // likes: { type: Number },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userName: String,
    userAvatar: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Playlist", playlistSchema);
