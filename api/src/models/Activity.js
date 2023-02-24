const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
	sequelize.define(
        'activity', {
	id: {
		type: DataTypes.INTEGER, //integer: numero entero
        autoIncrement:true,
		primaryKey: true,
		},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		},
    difficulty: {
		type: DataTypes.ENUM('1', '2', '3', '4', '5'),
        // type: DataTypes.INTEGER,
        // allowNull: false,
        // validate: {
        //   isInt: true,
        //   min: 1,
        //   max: 5,
        // },
		},
    duration: {
       type: DataTypes.INTEGER,
       allowNull: false,
    //    validate: {
    //      isInt: true,
    //      min: 1,
    //    },
        },
	season: {
		type: DataTypes.ENUM('spring', 'summer', 'fall' ,'winter '),
        allowNull: false,
		},
    
    },{timestamps:false});
};

