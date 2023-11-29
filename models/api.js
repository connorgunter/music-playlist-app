const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const songSchema = new Schema(
    { 
    },
    { timestamps: true }
  );



module.exports = mongoose.model("Song", songSchema);