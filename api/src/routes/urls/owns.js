const router = require("express").Router();
const { getBaseGames } = require("../constants/videogames");

router.get("/", async function(req, res) {
    let api = await getBaseGames();
    console.log(api.length);
    res.json(api);
});

module.exports = router;