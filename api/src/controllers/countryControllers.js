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

const deleteCountry = async (id) => {
   
  const result = Country.findAll({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });
    await Country.destroy({
      where: {
        id: id,
      },
    });
  
    return result;
  };



// async function putCountry(
//   id
//   // name,
//   // image,
//   // summary,
//   // healthScore,
//   // steps,
//   // dishTypes,
// ) {
//   const updateCountry = await Country.update(
//     // {
//     //   name: name,
//     //   image: image,
//     //   summary: summary,
//     //   healthScore: healthScore,
//     //   dishTypes: dishTypes.join(","),
//     //   steps: steps,
//     // },
//     { where: { id: id } },
//   );
//   return updateCountry;
// }

  
module.exports = { getAll, getCountryId, getCountryName, deleteCountry } 


