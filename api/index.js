//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { createDbGenre, createDbVidegames  } = require("../api/src/Funciones.js")
const syncOptions = { force: false, alter: true };

const puerto = 3001

// Syncing all the models at once.
conn.sync(syncOptions).then(() => {
  server.listen(puerto, async () => {
    
    if(syncOptions.force){
      console.log("Creando Juegos...")
      await createDbVidegames()
      console.log("Creando Generos...")
      await createDbGenre()
      console.log("Database full synced")
    }
    console.log(`Conectado y escuchando en el puerto ${puerto}`)
  });
});



