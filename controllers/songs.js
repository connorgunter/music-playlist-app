// const Song = require("../models/api");
// const fetch = require("node-fetch");
const Playlist = require("../models/playlist");
const token = process.env.LASTFM_TOKEN;
const ROOT_URL = "https://ws.audioscrobbler.com/2.0";

async function newSongs(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  const playlist = await Playlist.findById(req.params.id);
  res.render("songs/search", {
    title: "Search a Song",
    errorMsg: "",
    playlist,
    queryData: null,
  });
}

async function search(req, res, queryData) {
  const q = req.query.q;
  const playlist = await Playlist.findById(req.params.id);
  try {
    if (!q) return res.render("songs/search", { queryData: null, playlist });
    fetch(
      `${ROOT_URL}/?method=track.search&track=${q}&api_key=${token}&format=json&limit=10`
    )
      .then((res) => res.json())
      .then((queryData) => {
        const results = queryData.results.trackmatches.track.map((r) => {
          r.safe_name = r.name.replace(/\?/g, "%3F");
          
          return r;
        });
        res.render("songs/search", {
          title: `Search Results: ${q}`,
          errorMsg: "",
          queryData,
          playlist,
          results,
        });
      });
  } catch (err) {
    console.log(err);
  }
}


async function addToPlaylist(req, res) {
  const playlist = await Playlist.findById(req.params.id);
  const { name, artist } = req.params;
  
  try {
    fetch(
      `${ROOT_URL}/?method=track.getInfo&api_key=${token}&artist=${artist}&track=${name}&format=json`
    )
      .then((res) => res.json())
      .then((songData) => {
        playlist.songs.push({
          name: songData.track.name,
          artist: songData.track.artist.name,
          url: songData.track.url,
        });
        playlist.save();
        console.log(songData.track);
      });
    
    res.redirect(`/playlists/${playlist._id}/search`);
  } catch (err) {
    console.log(err);
  }
}
module.exports = {
  newSongs,
  search,
  addToPlaylist,
};
