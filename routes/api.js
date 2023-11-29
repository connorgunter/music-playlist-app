const express = require("express");
const router = express.Router();
const passport = require('passport');
const songsCtrl = require("../controllers/api");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get('/playlists/:id/search', ensureLoggedIn,songsCtrl.add)



module.exports =router