const { Router } = require('express');
// Importar todos los routers;
const videogameMiddleware = require("../Middlewares/Videogames.js")
const genreMiddleware = require("../Middlewares/Genre.js")
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", videogameMiddleware)
router.use("/genres", genreMiddleware)


module.exports = router;
