const router = require("express").Router();
const { allGames, apiQuery, apiId, baseId } = require("../constants/videogames");

router.get('/', async function(req, res) {
    const name = req.query.name
    if(name) {
        let reference = await apiQuery(name);
        res.send(reference);
    } else {
        let api = await allGames();
        console.log(api.length);
        res.json(api);
    };
});

router.get('/:id', async function(req, res) {
    const id = req.params.id;
    if(id.length === 36) {
        const base = await baseId(id);
        res.send(base);
    } else {
        const api = await apiId(id);
        res.send(api);
    };
});

module.exports = router;