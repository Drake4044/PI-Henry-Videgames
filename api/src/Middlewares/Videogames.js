const express = require("express")
const { Videogame, Genre } = require('../db');
const { getGameByName, getGamebyID, createGame } = require("../Funciones.js")
const { Op } = require("sequelize")
const router = express.Router()

router.get("/", async (req,res) => {
    const { name } = req.query
        if(name) {
            const games = await Videogame.findAll({
                    where: {
                        name: { [Op.iLike]: `%${name}%` }
                    },
                    include: {
                        model: Genre,
                        attributes: ['name'],
                        through: {
                            attributes: [],
                        },
                    },
                    limit: 15
                })
                console.log(games);
                games.length
                ? res.json(games)
                : res.status(400).json(`No se encontro un juego con el nombre = ${req.query.name}`)
        } else {
            try {
                const allVideogames = await Videogame.findAll({
                    include: {
                        model: Genre,
                        attributes: ['name'],
                    },
                })

                const videogames = allVideogames.map((vg) => {
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

                res.json(videogames)
            } catch (e) {
                res.status(404).json("Juegos no encontrados")
            }
        }

})


router.get("/:id", async (req,res) => {
    try {
        const { id } = req.params
        const game = await getGamebyID(id)
    
        !game
        ? res.status(400).json(`No se encontro el id: ${req.params.id}`)
        : res.json(game)
    } catch (error) {
        res.status(400).json(`No se encontro el id: ${req.params.id}`)
    }
})



router.post("/", async (req,res) => {
    try {
        const { id, name, description, platforms } = req.body
        if( id && name && description && platforms ){
            const newGame = await createGame(req.body)
            res.json(newGame)
        }
        res.status(400).json("Faltan completar datos")
    } catch (error) {
        res.status(404).json("No se pudo cargar el juego ):")
    }
})

module.exports = router
