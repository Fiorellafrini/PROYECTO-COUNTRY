const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'country', 
    {  

//   key:{
// type: DataTypes.STRING,
// unique: true
//   },
  id: {
   type: DataTypes.STRING, //Cadena string
   allowNull: false, // No puede estar vacio
   primaryKey: true, // Llave primaria
   unique: true,
    },
name: {
  type: DataTypes.STRING,
  allowNull: false,
},
flag: {
  type: DataTypes.STRING,
  allowNull: false,// HAY PAISES SIN BANDERA
},
continent: {
  type: DataTypes.STRING,
  allowNull: false, //HAY PAISES SIN CONTINENTES
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
