const express = require("express")
const { Genre } = require('../db');
const router = express.Router()

router.get("/", async (req,res) => {
    try {
        const genre = await Genre.findAll()
        res.json(genre)
    } catch (error) {
        res.json("No se encontraron los generos ):")
    }
})


module.exports = router

