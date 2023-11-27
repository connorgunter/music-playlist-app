const express = require("express");
const router = express.Router();
const profilesCtrl = require('../controllers/profiles');

router.get('/new', profilesCtrl.new);

module.exports = router;

