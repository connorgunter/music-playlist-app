
const Song = require("../models/api");
const fetch =require('node-fetch')

function add(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    res.render("playlists/search", { title: "Search a song", errorMsg: "" });
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