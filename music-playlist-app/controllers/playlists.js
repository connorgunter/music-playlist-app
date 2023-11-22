const Playlist = require("../models/playlist");

function newPlaylist(req, res) {
  res.render("playlists/new", { title: "Add Playlists", errorMsg: "" });
}

// async function create(req, res) {
//   for (let key in req.body) {
//     if (req.body[key] === "") delete req.body[key];
//   }
//   try {
//     Playlist.create(req.body);
//     res.redirect("/playlist");
//   } catch (err) {
//     console.log("create error", err);
//     res.render("playlists/new", { errorMsg: err.message });
//   }
// }

// async function index(req, res) {
//     try {
//       const playlist = await Playlist.find().sort("yearOpened");
//       res.render("playlists/index", { title: 'all playlist', playlist });
//     } catch (err) {
//       console.log("index error", err);
//     }
//   }

module.exports = {
  new: newPlaylist,
};
