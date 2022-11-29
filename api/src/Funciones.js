require('dotenv').config();
const axios = require("axios")
const { Videogame, Genre } = require('../src/db.js');
const { API_KEY } = process.env;


// Creando database

// Genre
const createDbGenre = async () => {
    const apiGenres = await 
    axios(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    const generes = await apiGenres.data.results

	generes.sort((a, b) => {
		return a.name.localeCompare(b.name);
	})
    
	generes.forEach((genre) => {
		Genre.create({
            id: genre.id,
			name: genre.name,
		});
	})
    console.log("Database Genre synced")
}

// Videogames
const createDbVidegames = async () => {

    let videogames = [];

	for (let i = 1; i <= 5; i++) {
		const apiGames = await 
        axios(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
		const listOf100Games = await apiGames.data.results

		videogames = videogames.concat(listOf100Games)
		console.log(`${videogames.length} Juegos cargados`)
	}   


    const games = videogames.map( gm => ({
            id: gm.id,
            name: gm.name,
            description: gm.description,
            image: gm.background_image,
            released: gm.released,
            rating: gm.rating,
            platforms: gm.platforms?.map( p => p.platform.name).join(", "),
            genres: gm.genres?.map( g => g.id ),
        }
    ))

    for (let i = 0 ; i < games.length ; i++) {
    
        let newGame = await Videogame.create(games[i]);
        let relation = games[i].genres;
        await newGame.addGenre(relation);

    }


    // games.forEach( async game => {
    //     await Videogame.create(game)
    // })
    console.log("Database Videogame synced");
}


// Funciones Rutas


const getGameByName = async name => {
    const gameQuery = await 
    axios(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)
    const gameQ = await gameQuery.data.results
    
    const games = gameQ.map( gm => (
        {
            id: "api " + gm.id,
            name: gm.name,
            image: gm.background_image,
            released: gm.released,
            rating: gm.rating,
            platforms: gm.platforms.map( p => p.platform.name).join(", "),
            genre: gm.genres.map( p => p.name).join(", ")
        }))
    return games
}


const getGamebyID = async id => {
    const pedidoId = await
    axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    const game = await pedidoId.data

    const gameid = {
            id: "api " + game.id,
            name: game.name,
            description: game.description_raw,
            image: game.background_image,
            released: game.released,
            rating: game.rating,
            platforms: game.platforms.map( p => p.platform.name).join(", "),
            genre: game.genres.map( p => p.name).join(", ")
        }
        
    return gameid
    
}


const createGame = async game => {
    let uniqueId = new Date().getTime()
	let platforms = game.platforms && game.platforms.join(', ')
	const {
		id = "database" + uniqueId,
		name,
		description,
		image,
		released,
		rating,
		genres,
	} = game

	const gameCreated = await Videogame.create({
		id,
		name,
		description,
		image,
		released,
		rating,
		platforms: platforms,
	})
	const genreDb = await Genre.findAll({
		where: { name: genres },
	})
	gameCreated.addGenres(genreDb)

	return gameCreated
}

const getGameDataBase = async (name) => {
    const game = await game.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`,
            },
        },
        include: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        // limit: 15
        },
    });
    if (game.length) {
        const gameFormat = game.map((vg) => {
            return {
                id: vg.id,
                name: vg.name,
                description: vg.description,
                image: vg.image,
                released: vg.released,
                rating: vg.rating,
                platforms: vg.platforms,
                genres: vg.genres.map((g) => g.name).join(', '),
            };
        });
        return gameFormat;
    } 
}     

const joinGenres = (allGames) => {

    const games = allGames.map( game => (
        {
            id: game.id,
            name: game.name,
            description: game.description,
            image: game.image,
            released: game.released,
            rating: game.rating,
            platforms: game.platforms,
            genres: game.genres.map((g) => g.name).join(', '),
        }
    ))
    return games
}


module.exports = {
    createDbGenre,
    createDbVidegames,
    getGameByName,
    getGamebyID,
    createGame,
    getGameDataBase,
    joinGenres

}