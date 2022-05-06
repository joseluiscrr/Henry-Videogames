const { Router } = require('express');
const videogames = require("./urls/videogames");
const videogame = require("./urls/videogame")
const genres = require("./urls/genres");
const router = Router();

router.use('/videogames', videogames);
router.use('/videogame', videogame)
router.use('/genres', genres);

module.exports = router;