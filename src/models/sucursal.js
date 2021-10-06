'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sucursal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Sucursal.belongsToMany(models.Producto, {
        through: {
          model: 'ProductoSucursal',
          scope: {stock: 1}
        },
        foreignKey: "sucursalId"
      })
    }
  };
  Sucursal.init({
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sucursal',
    paranoid: true,
  });
  return Sucursal;
};