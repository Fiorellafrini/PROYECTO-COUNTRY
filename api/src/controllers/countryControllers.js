const { Country, Activity } = require('../db');
const { Op } = require("sequelize");



const getAll = async () => {
    const allCountries = await Country.findAll();
        return allCountries
}


const getCountryId = async (id) => {
    const countryId = await Country.findByPk(id.toUpperCase(), { include: Activity});
    if (!countryId) throw Error(`There is no country with the id: ${id} `);
    return countryId;
  };


const getCountryName = async (name) => {
//   let upperName = name.charAt(0).toUpperCase() + name.slice(1); // coloco la primera letra en mayuscula para que coincida
  const countryName = await Country.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
    include: Activity,
  });
  if (countryName.length) return countryName;
  throw Error(`There is no country with the name: ${name} `);
};

// %200%


module.exports = { getAll, getCountryId, getCountryName } 
















// const { Country, Activity } = require("../db");
// const { Op } = require("sequelize");

// const getAllCountries = async () => {
//   const allCountries = await Country.findAll({
//     include: Activity, // El incluide, une la tabla de las actividades turisticas
//   });
//   return allCountries;
// };


// const findCountry = async (name) => {
//     let upperName = name.charAt(0).toUpperCase() + name.slice(1); // coloco la primera letra en mayuscula para que coincida
//     const countryName = await Country.findAll({
//       where: {
//         name: { [Op.iLike]: `%${upperName}%` },
//       },
//       include: TouristActivity,
//     });
//     if (countryName.length) return countryName;
//     throw Error(`There is no country with the name: ${name.toUpperCase()} `);
//   };
  
//   module.exports = {
//     getAllCountries,
//     // getCountryId,
//     findCountry,
//   };


