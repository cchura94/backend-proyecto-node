'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Usuario.init({
    nombre: {
      type: DataTypes.STRING, 
      allowNull:false
    },
    correo: {
      type: DataTypes.STRING(200), 
      validate: {
        isEmail: true
      },
      unique: true
    },
    password: {
      type: DataTypes.STRING(200), 
      allowNull:false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    rol: DataTypes.STRING(20)
  }, {
    sequelize,
    modelName: 'Usuario',
    indexes: [{
      fields: ['correo'],
      unique: true,
    }]
  });
  return Usuario;
};