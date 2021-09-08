# Comandos para iniciar un Nuevo Proyecto en Node.js
## 1. Iniciar un nuevo proyecto en Node
- creará un archivo (package.json) con la configuración por defecto de npm
```
npm init --y
```

## 2. Instalamos el Framework express.js
- descargará e instalará el framework express
```
npm i express
```
- además creará una carpeta (node_modules) desde esta todas las dependencias de express y modifica el archivo package.json con la version de express

## 3. Crear una carpeta llamada (src) en el directorio raiz
- En esta carpeta estará el codigo en entorno de desarrollo (dev)

## 4. (opcional) Configuración GIT
### iniciar un nuevo repositorio GIT
```
git init
```
### creamos dos archivo (.gitignore, README.md)
- .gitignore : ignora los archivos para no subir a un repositorio remoto (github, gitlab, bitbucket)
- README.md : agremos la descripción del proyecto y otros...

### Subir el codigo a GITHUB 
```
git add .
git commit -m "Proyecto Inicial"
```
### crear el repositorio remoto en GITHUB (tener una cuenta en github)

```
git remote add origin https://github.com/cchura94/backend-proyecto-node.git

git push origin master
```
## 5. Configurar y Levantar el Servidor con Express
- En la carpeta (src/index.js) creamos un archivo (index.js) y agregar el código de servidor con express

``` js
// importar módulos
const express = require("express");

// variables auxiliares
let PORT = 3000
// configuración de módulos
let app = express();


// levantar el servidor
app.listen(PORT, function(){
    console.log(`El servidor está levantado en http://127.0.0.1:${PORT}`)
});

```
## 6. Configuración Babel (Soporte ES6)
- Con babel vamos a darle sporte a nuestro de javascript
- Babel transformará de ES6 a ES5

### 6.1 Instalamos dependencias de babel
```
npm i @babel/cli @babel/node @babel/core @babel/preset-env -D
```
### 6.2 Creamos un archivo (.babelrc) y agregamos la configuración
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": true
        }
      }
    ]
  ]
}
```

### 6.3 En package.json agregamos comandos
```json
"scripts": {
    "dev": "nodemon --exec babel-node src/index.js",
    "build": "babel src/ --out-dir dist",
    "start": "node dist/index.js"
}
```
## 7. Configuración de rutas con Express
- Crear una un archivo en la carpeta en (src/routes/index.js)

```js
import express from 'express'
let router = express.Router();

// rutas
router.get("/", function(req, res){
    res.json({mensaje: "Bienvenido a la api del proyecto"})
});

module.exports = router
```

## 8 Habilitamos las rutas en src/index.js
```js
import router from "./routes/index"

let app = express();
app.use('/api', router);

```

## Probamos la estructura
- Probamos en http://127.0.0.1:3000/api

---------------------------------
# Base de datos
## 1. Instalar Sequelize ORM
```
npm install --save sequelize
```
## 2. Instalar manualmente el driver para la base de datos que elija:
```
$ npm install --save pg pg-hstore # Postgres  <-------
$ npm install --save mysql2
$ npm install --save mariadb
$ npm install --save sqlite3
$ npm install --save tedious # Microsoft SQL Server
```
- en el caso de postgres
```
npm install --save pg pg-hstore
```

## 3. Instalamos sequelize-CLI 
```
npm install --save-dev sequelize-cli
```

## 4. configurar sequelize para crear las carpetas en la direccion src
- Creamos e archivo (.sequelizerc)
```
const path = require('path');

module.exports = {
  'config': path.resolve('src/config', 'database.json'),
  'models-path': path.resolve('src', 'models'),
  'seeders-path': path.resolve('src', 'seeders'),
  'migrations-path': path.resolve('src', 'migrations')
};
```
## 5. Arrancar la configuración base de sequelize
```
npx sequelize-cli init
```

## 6. Configurar la conexion con la Base de Datos.
- En (src/config/database.json) configuramos para postgres
``` json
{
  "development": {
    "username": "postgres",
    "password": "postgresql",
    "database": "database_back_node",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
## 7. Crear la base de datos manualmente
- con el nombre (database_back_node)

## 8. Creación del primer modelo (Entidad) y su migración (tabla)
- Para el Modelo Usuario y su migracion usuarios
```
npx sequelize-cli model:generate --name Usuario --attributes nombre:string,correo:string,password:string,estado:boolean
```

## 9. Ejecución de migraciones
```
npx sequelize-cli db:migrate
```

---
# generando los archivos (Model y migrations)

```
npx sequelize-cli model:generate --name Categoria --attributes nombre:string,detalle:text

npx sequelize-cli model:generate --name Producto --attributes nombre:string,precio:decimal,imagen:string,descripcion:text,categoriaId:integer

npx sequelize-cli model:generate --name Sucursal --attributes nombre:string,direccion:string,telefono:string

npx sequelize-cli model:generate --name ProductoSucursal --attributes productoId:integer,sucursalId:integer,stock:integer

```