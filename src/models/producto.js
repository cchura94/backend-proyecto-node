'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    static associate(models) {
      // define association here
      // N:1
      models.Producto.belongsTo(models.Categoria, {
        foreignKey: "categoriaId"
      });
      //N:M
      models.Producto.belongsToMany(models.Sucursal, {
        through: {
          model: 'ProductoSucursal',
          scope: {stock: 1}
        },
        foreignKey: "productoId"
      })

      /**
       * Project.belongsToMany(User, { through: UserProjects })
        jan.addProject(homework, { started: false }) 
       */

    }
  };
  Producto.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    imagen: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    categoriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Producto',
    paranoid: true,
  });
  return Producto;
};