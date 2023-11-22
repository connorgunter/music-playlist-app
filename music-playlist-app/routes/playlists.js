const express = require('express');
const router = express.Router();
const playlistCtrl = require('../controllers/playlists')

// GET /playlists
// router.get('/', playlistCtrl.index)

router.get('/new', playlistCtrl.new)

module.exports = router;
