const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
	sequelize.define(
        'activity', {
	//// no ponemos id pq seq lo crea por defecto y es un n entero que se incrementa de a uno
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
    type: DataTypes.ENUM({
        // Valores predefinidos para seleccionar
        values: ["1", "2", "3", "4", "5"],
      }),
		// allowNull: false,

    },
  duration: {
       type: DataTypes.INTEGER,
       defaultValue: "1"
  
        },
    season: {
      type: DataTypes.ENUM({
        values: ["Summer", "Autumm", "Spring", "Winter"],
      }),
    },
    
    },{timestamps:false});
};

