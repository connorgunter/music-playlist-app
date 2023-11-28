const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema(
  {
    name: { type: String, required: true },
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
        type: Schema.Types.ObjectId,
        ref: "Song",
      },
    ],
    likes: { type: Number },
  },
  { timestamps: true }
);

// ICEBOX TO-DO

// playlistSchema.virtual("timeAgo").get(function () {
//   const now = new Date();
//   const diffInMillis = now - this.createdAt;
//   const diffInMinutes = Math.floor(diffInMillis / (1000 * 60));

//   return `${diffInMinutes} minutes ago`;
// });

module.exports = mongoose.model("Playlist", playlistSchema);