// importar módulos
// const express = require("express");
import express from "express"
import router from "./routes/index"

// variables auxiliares
let PORT = 3000
// configuración de módulos
let app = express();
app.use('/api', router);


// levantar el servidor
app.listen(PORT, function(){
    console.log(`El servidor está levantado en http://127.0.0.1:${PORT}`)
});

