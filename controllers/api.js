
const Song = require("../models/api");
const fetch =require('node-fetch')
const Playlist =require("../models/playlist")

function add(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const playlist = Playlist.findById(req.params.id)
    res.render("songs/search", { title: "Search a song", errorMsg: "" , playlist});
  }

async function search (req,res) {

}

async function addToPlaylist(req, res) {

  }

module.exports = {
add,
search,
addToPlaylist
 
  };