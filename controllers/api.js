const Song = require("../models/api");
// const fetch = require("node-fetch");
const Playlist = require("../models/playlist");
const token = process.env.LASTFM_TOKEN;
const ROOT_URL = "https://ws.audioscrobbler.com/2.0";

function add(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  const playlist = Playlist.findById(req.params.id);
  res.render("songs/search", {
    title: "Search a Song",
    errorMsg: "",
    playlist,
    queryData: null,
  });
}

async function search(req, res, next) {
  const q = req.query.q;
  const playlist = await Playlist.findById(req.params.id);
  console.log(req.body);
  // const results = queryData.results.trackmatches.track
  try {
    if (!q) return res.render("songs/search", { queryData: null, playlist });
    fetch(
      `${ROOT_URL}/?method=track.search&track=${q}&api_key=${token}&format=json&limit=10`
    )
      .then((res) => res.json())
      .then((queryData) => {
        res.render("songs/search", {
          title: `Search Results: ${q}`,
          errorMsg: "",
          queryData,
          playlist,
        });
      });
  } catch (err) {
    console.log(err);
  }
}

// function addToPlaylist(req, res) {
//   try {
//     const playlist = Playlist.findById(req.params.id);
//     console.log(req.params.id);
//     // const song = await Song.find();
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function addToPlaylist(req, res) {}

module.exports = {
  add,
  search,
  // addToPlaylist,
};
