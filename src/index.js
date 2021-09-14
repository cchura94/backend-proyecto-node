// importar módulos
// const express = require("express");
import express from "express"
import router from "./routes/index"
import cors from "cors"

// variables auxiliares
let PORT = 3000
// configuración de módulos
let app = express();

// CORS
app.use(cors())

// captura de datos del cliente en formato json (req.body)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// habilitar rutas
app.use('/api', router);


// levantar el servidor
app.listen(PORT, function(){
    console.log(`El servidor está levantado en http://127.0.0.1:${PORT}`)
});

