const { Country, Activity } = require("../db");

const postCreateActivity = async (
    name,
    difficulty,
    duration,
    season,
    id
) => {
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });

//   console.log('MODELO', Activity.__proto__);
//   console.log('ENTIDAD', newActivity.__proto__);

const countryDb = await Country.findAll({ where: { id } });

return await newActivity.addCountry(countryDb);

//   return newActivity;
};


const getAllActivity = async () => {
    //este get es necesario para los filtros en el front
    const allActivity = await Activity.findAll({
      include: Country, // El incluide, une la tabla de los paises
    });

    if (!allActivity.length) throw Error("There are no tourist activities");
    return allActivity;
  };




module.exports = {
  postCreateActivity, getAllActivity
};
