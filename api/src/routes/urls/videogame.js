const router = require("express").Router();
const Sequelize = require("sequelize");
const { Videogame, Genre } = require("../../db");
const Op = Sequelize.Op;

router.post('/', async (req, res) => {
    const { name, genres, description, released, rating, platforms } = req.body;
    if(!name || !description) return res.status(422).json({ message: 'Name and Description required' });
    if(rating < 0 || rating > 5) return res.status(422).json({ message: 'Rating must be between 0 or 5' });
    const gameBase = await Videogame.create({ name, description, released, rating, platforms: platforms.join(', ') });
    const genreBase = await Genre.findAll({ where: {name: {[Op.in]: genres}} });
    if(!genreBase.length) return res.status(422).json({ message: 'There is no exist a genre like this' });
    gameBase.addGenre(genreBase);
    res.send('Commited game');
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const game = await Videogame.findAll({ where: {id: id}});
    game ? Videogame.destroy({ where: {id: id}}) && res.status(200).send('Deleted game') : res.status(422).send('Game not found')
});

module.exports = router;