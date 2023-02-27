
const axios = require("axios");
const { Country } = require("./db");

//AQUI ME TRAIGO LA INFO DE LA API. LA MAPEO, Y LA ENVIO A LA BD
const infoApi = async () => {
  try {
    const info = await axios('https://restcountries.com/v3/all');

    info.data.map(async (pais) => {
      await Country.findOrCreate({
        where: {
          id: pais.cca3,
          name: pais.name.common,
          flag: pais.flags[1],
          continent: pais.continents[0],
          capital: pais.capital
            ? pais.capital[0]
            : "Esta capital no está registrada.",
          subregion: pais.subregion
            ? pais.subregion
            : "Esta subregión no está registrada.",
          area: pais.area,
          population: pais.population,
        },
      });
    });
  } catch (err) {
    // console.log(err);
  }
};

module.exports = { infoApi };



// //------------------

// const axios = require("axios");
// const { Country } = require('../src/db');


// //Necesito pedir la información de la API y guardarla con el metodo BulkCreate en la Base de Datos
// //para trabajar directamente desde ahí y no desde la API

// const getApiInfo = async() => {
//   try {
//     const apiUrl = await axios.get('https://restcountries.com/v3/all');//solicito los paises desde la API
//     const apiInfo = await apiUrl.data.map((data) => {
//       //Selecciono de la respuesta, solo los countryos que preciso
//       return {
//         id: data.cca3,
//         name: data.name.common,
//         flag: data.flags[1],
//         continent: data.continents[0]
//         capital: data.capital
//           ? data.capital[0]
//           : (data.capital = "Esta capital no está registrada."),
//         subregion: data.subregion
//           ? data.subregion
//           : (data.subregion = "Esta subregión no está registrada."),
//         area: data.area,
//         population: data.population,
//       };
//     });
//     // console.log(apiInfo);
//     return apiInfo;
//   } catch (error) {
//     // console.log(error);
//   }
// };


// const infoApi = async() => {
//   try {
//     const countries = await getApiInfo();
//     // console.log(countries);

//     const db = await Country.findAll(); // Traigo todos los datos de la base de datos


//     if (!db.length) {
//       //Verifico si existen datos en la base de datos.
//    const createCountry = await Country.bulkCreate(countries); // si no existen, creo los paises en la base de datos ejecutando la función "getDB"
//   //  console.log(createCountry[5]);

//    return createCountry
//     } else {
//       return db; //Si ya existen datos en la BD, los retorno.
//     }
//   } catch (error) {
//     // console.log(error.message);
//   }

// };


// module.exports = {infoApi}; //exporto la función para poder usarla en INDEX.JS

