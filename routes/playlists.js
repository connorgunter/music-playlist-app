const express = require("express");
const router = express.Router();
const playlistCtrl = require("../controllers/playlists");
<<<<<<< HEAD

router.get("/", playlistCtrl.myIndex);
// Remember: new route always bfore show
router.get("/new", playlistCtrl.new);
router.get("/:id", playlistCtrl.show);
// 1. GET /playlists/:id/edit
router.get("/:id/edit", playlistCtrl.edit);
router.post("/", playlistCtrl.create);
router.delete("/:id", playlistCtrl.delete);
// 2. PUT /playlists/:id
router.put('/:id', playlistCtrl.update)
=======
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/", ensureLoggedIn, playlistCtrl.myIndex);
// Remember: new route always bfore show
router.get("/new", ensureLoggedIn, playlistCtrl.new);
router.get("/:id", playlistCtrl.show);
// 1. GET /playlists/:id/edit
router.get("/:id/edit", ensureLoggedIn, playlistCtrl.edit);
router.post("/", playlistCtrl.create);
router.delete("/:id", ensureLoggedIn, playlistCtrl.delete);
// 2. PUT /playlists/:id
router.put("/:id", playlistCtrl.update);
>>>>>>> development

module.exports = router;
