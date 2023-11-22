const Playlist =require('../models/playlist')



async function create(req,res) {
    for (let key in req.body) {
        if (req.body[key] === "") delete req.body[key];
      }
    try {
     Playlist.create(req.body)
     res.redirect('/playlist')
    }
    catch (err){
        console.log('create error',err)
        res.render('playlists/new',{errorMsg:err.message })
    }
}

async function index(req, res) {
    try {
      const restaurants = await Restaurant.find().sort("yearOpened");
      res.render("restaurants/index", { title: "All Restaurants", restaurants });
    } catch (err) {
      console.log("index error", err);
    }
  }










module.exports ={
    index,
    create
}