const Playlist = require("../models/playlist");

function newPlaylist(req, res) {
  res.render("playlists/new", { title: "Create a Playlist", errorMsg: "" });
}

async function create(req, res, next) {
  req.body.name = req.body.name.trim();
  try {
    const newPlaylist = await Playlist.create(req.body);
    console.log(newPlaylist);
    res.redirect(`/playlists/${newPlaylist._id}`);
  } catch (err) {
    console.log("create error", err);
    res.render("playlists/new", { errorMsg: err.message });
    next(Error(err));
  }
}

async function show(req, res) {
  try {
    const playlist = await Playlist.findById(req.params.id);
    res.render("playlists/show", { title: "Playlist Details", playlist });
  } catch (err) {
    console.log(err);
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
  create,
  show,
};
