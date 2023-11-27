const Profile = require("../models/profile");

function newProfile(req, res) {
    res.render('profiles/new', { title: "New Profile", errorMsg: ''})
}

module.exports = {
    new: newProfile
}