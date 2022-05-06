const axios = require("axios");
const { API_KEY } = process.env;
const { Genre } = require("../../db")

async function allGenres() {
    let api = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    api.data.results.forEach(async r => {
        await Genre.findOrCreate({
            where: {
                name: r.name
            }
        });
    });
    return api.data.results;
};

module.exports = {
    allGenres
};