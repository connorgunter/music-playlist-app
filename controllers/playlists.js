const Playlist = require("../models/playlist");

function newPlaylist(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  res.render("playlists/new", { title: "Create a Playlist", errorMsg: "" });
}

async function create(req, res, next) {
  req.body.name = req.body.name.trim();
  try {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const newPlaylist = await Playlist.create(req.body);
    // console.log(newPlaylist);
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
    res.render("playlists/show", {
      title: `${playlist.name}`,
      playlist,
    });
  } catch (err) {
    console.log(err);
  }
}

async function myIndex(req, res) {
  try {
    const myPlaylists = await Playlist.find({ user: req.user._id }).sort(
      "createdAt"
    );
    // req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    res.render("playlists/index", { title: "My Playlists", myPlaylists });
  } catch (err) {
    console.log("index error", err);
  }
}

async function index(req, res) {
  try {
    const allPlaylists = await Playlist.find().sort("likes");
    res.render("index", { title: "All Playlists", allPlaylists });
  } catch (err) {
    console.log("index error", err);
  }
}

async function deletePlaylist(req, res) {
  try {
    const playlistId = req.params.id;
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    await Playlist.findByIdAndDelete(playlistId);
    res.redirect("/playlists");
  } catch (err) {
    console.log("index error", err);
  }
}

async function edit(req, res) {
  try {
    // res.send("Edit page will be here");
    const playlist = await Playlist.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    console.log(req.body)
    // res.send(playlist)
    res.render("playlists/edit", {
      title: "Edit Playlist",
      playlist,
      errorMsg: "",
    });
  } catch (err) {
    console.log(err);
  }
}

async function update(req, res) {
  try {
    const playlist = await Playlist.findById(req.params.id);
    // rename each property based on edit form values
    // TODO: note to come back and revisit this approach
    playlist.name = req.body.name;
    playlist.description = req.body.description;
    playlist.mood = req.body.mood;
    //
    // console.log(req.body);

    // save the update
    await playlist.save();
    // console.log(playlist);
    res.redirect(`/playlists/${req.params.id}`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  new: newPlaylist,
  create,
  show,
  myIndex,
  index,
  delete: deletePlaylist,
  edit,
  update,
};
