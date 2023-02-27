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
const  {infoApi}  = require('./src/apiInfo.js');
const server = require('./src/app.js'); //Nuestro servidor
const { conn } = require('./src/db.js');



// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  console.log('DB CONECTADA');
  
    server.listen(3001, async() => {
      console.log('%s listening at 3001'); // eslint-disable-line no-console

     await infoApi()
// await getDb()

  });
});

