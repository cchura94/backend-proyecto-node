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

