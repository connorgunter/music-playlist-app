const Playlist = require("../models/playlist");

function newPlaylist(req, res) {
  res.render("playlists/new", { title: "Create a Playlist", errorMsg: "" });
}

async function create(req, res) {
  try {
    const newPlaylist = await Playlist.create(req.body)
    console.log(newPlaylist)
    res.redirect("/playlists/new");
  } catch (err) {
    console.log("create error", err);
    res.render("playlists/new", { errorMsg: err.message });
  }
}

// async function index(req, res) {
//     try {
//       const playlist = await Playlist.find()
//       res.render("playlists/index", { title: 'All Playlist', playlist });
//     } catch (err) {
//       console.log("index error", err);
//     }
//   }

module.exports = {
  new: newPlaylist,
  create
};
