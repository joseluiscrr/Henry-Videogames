const axios = require("axios");
const { Videogame, Genre } = require("../../db");
const { API_KEY } = process.env;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

async function getApiGames() {
    let api1 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=1&page_size=40`);
    let api2 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2&page_size=40`);
    let api3 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3&page_size=20`);
    let apis = api1.data.results.concat(api2.data.results).concat(api3.data.results);
    let array = [];
    apis.map(r => {
        let obj = {
            id: r.id,
            image: r.background_image,
            name: r.name,
            genres: r.genres.map(r => r.name).join(', '),
            released: r.released,
            rating: r.rating,
            platforms: r.platforms.map(r => r.platform.name).join(', ')
        };
        array.push(obj);
    });
    return array;
};

async function getBaseGames() {
    let base = await Videogame.findAll({ include: {model: Genre, attributes: ['name'], through: { attributes: [] }} });
    let array = [];
    base.map(r => {
        let obj = {
            id: r.id,
            name: r.name,
            genres: r.genres.map(r => r.name).join(', '),
            released: r.released,
            rating: Number(r.rating),
            platforms: r.platforms
        };
        array.push(obj);
    });
    return array;
};

async function allGames() {
    var apiGames = await getApiGames();
    var baseGames = await getBaseGames();
    var games = apiGames.concat(baseGames);
    return games;
};

async function apiQuery(name) {
    let base = await Videogame.findAll({ where: {name: {[Op.iLike]: name}} });
    let api = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}&page_size=15`);
    let array = [];
    if(base.length > 0) {
        return base;
    } else {
        api.data.results.map(r => {
            let obj = {
                id: r.id,
                image: r.background_image,
                name: r.name,
                genres: r.genres.map(r => r.name).join(', '),
                released: r.released,
                rating: r.rating,
                platforms: r.platforms === null ? null : r.platforms.map(r => r.platform.name).join(', ')
            };
            array.push(obj);
        });
        return array;
    };
};

async function apiId(id) {
    let api = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
    let array = [];
    if(api.data) {
        [api.data].map(r => {
            let obj = {
                id: r.id,
                image: r.background_image,
                name: r.name,
                genres: r.genres.map(r => r.name).join(' • '),
                description: r.description.replace(/<[^>]+>/g, ''),
                released: r.released,
                rating: r.rating,
                platforms: r.platforms.map(r => r.platform.name).join(' • ')
            };
            array.push(obj);
        });
        return array;
    };
};

async function baseId(id) {
    const base = await Videogame.findByPk(id, {
        include: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    });
    let array = [];
    [base].map(r => {
        let obj = {
            id: r.id,
            name: r.name,
            genres: r.genres.map(r => r.name).join(' • '),
            description: r.description,
            released: r.released,
            rating: Number(r.rating),
            platforms: r.platforms.replaceAll(',', ' •')
        };
        array.push(obj);
    });
    return array;
};

module.exports = {
    getApiGames,
    getBaseGames,
    allGames,
    apiQuery,
    apiId,
    baseId
};