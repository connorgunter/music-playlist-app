const Song = require("../models/api");
const fetch = require("node-fetch");
const Playlist = require("../models/playlist");

function add(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  const playlist = Playlist.findById(req.params.id);
  res.render("songs/search", {
    title: "Search a Song",
    errorMsg: "",
    playlist,
  });
}

async function search(req, res, next) {
  // const URL = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${req.query}&api_key=343d6527988382155ca7f8b3e577db33&format=json`
  // const config = {
  //   method: GET
  // }
  try {
  // const playlist = Playlist.findOne();
  const q = req.query.q;
  console.log(`search query: ${q}`);
  // const apiResponse = await fetch(URL, config)
  res.render("songs/search", {
    title: "Search Results",
    errorMsg: "",
    // playlist
  });
  } catch (err) {
    console.log(err);
  }
}

async function addToPlaylist(req, res) {}

module.exports = {
  add,
  search,
  addToPlaylist,
};
