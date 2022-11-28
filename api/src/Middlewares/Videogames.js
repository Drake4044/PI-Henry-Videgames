const express = require("express")
const { Videogame } = require('../db');
const { getGameByName, getGamebyID, createGame } = require("../Funciones.js")
const { Op } = require("sequelize")
const router = express.Router()

router.get("/", async (req,res) => {
    const { name } = req.query
        if(name) {
            const gamesQuery = await Videogame.findAll({
                    where: {
                        name: { [Op.iLike]: `%${name}%` }
                    },
                    limit: 15
                })

                gamesQuery.length
                ? res.json(gamesQuery)
                : res.status(400).json(`No se encontro un juego con el nombre = ${req.query.name}`)
        } else {
            try {
                const allVideogames = await Videogame.findAll()
                res.json(allVideogames)
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
