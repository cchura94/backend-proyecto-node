'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductoSucursal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ProductoSucursal.init({
    productoId: DataTypes.INTEGER,
    sucursalId: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductoSucursal',
  });
  return ProductoSucursal;
};