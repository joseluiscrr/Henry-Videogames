const { Router } = require('express');
const videogames = require("./urls/videogames");
const videogame = require("./urls/videogame")
const genres = require("./urls/genres");
const owns = require("./urls/owns")
const router = Router();

router.use("/videogames", videogames);
router.use("/videogame", videogame)
router.use("/genres", genres);
router.use("/owns", owns);

module.exports = router;