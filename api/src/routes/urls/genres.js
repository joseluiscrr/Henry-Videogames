const router = require("express").Router();
const { Genre } = require("../../db")
const { allGenres } = require("../constants/genres");

router.get("/", async function(req, res) {
    const genresBase = await Genre.findAll();
    const base = genresBase.map(r => r.name);
    const genresApi = await allGenres();
    const api = genresApi.map(r => r.name);
    base.length ? res.json(base) : res.json(api);
});

module.exports = router;