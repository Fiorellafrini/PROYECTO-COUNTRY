const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'country', {
id: {
  type: DataTypes.STRING(3),
  allowNull: false,
  primaryKey: true,
  // validate: {
  //   isAlpha: true,
  //   len: [3],
  },
name: {
  type: DataTypes.STRING,
  allowNull: false,
},
flag: {
  type: DataTypes.STRING,
  allowNull: false,
},
continent: {
  type: DataTypes.STRING,
  allowNull: false,
},
capital: {
  type: DataTypes.STRING,
  allowNull: false,
},
subregion: {
  type: DataTypes.STRING,
  allowNull: false,
},
area: {
  type: DataTypes.FLOAT,
  allowNull: false,
},
population: {
  type: DataTypes.FLOAT, // float: incluye numero decimal
  allowNull: false,
},
},
{ timestamps: false }
);
};
