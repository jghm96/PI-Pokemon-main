const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type:DataTypes.STRING,
      allowNull:false,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        min:1,
        max:100
      }
    },
    img:{
      type: DataTypes.STRING,
      validate:{
        isUrl:true
      }
    },
    height:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        min:1,
        max:20
      }
    },
    fromDb:{
      type: DataTypes.BOOLEAN,
      defaultValue:true
    },
    weight:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        min:1,
        max:1000
      }
    },
    attack:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        min:1,
        max:250
      }
    },
    defense:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        min:1,
        max:250
      }
    },
    speed:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        min:1,
        max:100
      }
    },
  },{ timestamps: false });
};
