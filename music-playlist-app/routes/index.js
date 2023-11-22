const express = require("express");
const router = express.Router();
const playlistCtrl = require("../controllers/playlists");

/* GET home page. */
router.get("/", playlistCtrl.index);

module.exports = router;
