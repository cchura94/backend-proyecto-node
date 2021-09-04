import express from 'express'
let router = express.Router();
import * as usuarioController from "./../controllers/usuario.controller"

// rutas
router.get("/", function(req, res){
    res.json({mensaje: "Bienvenido a la api del proyecto"})
});

router.get("/saludo", function(req, res){
    res.json({mensaje: "Saludos Humanos!!"})
});

// rutas usuario
router.get("/usuario", usuarioController.listar);
router.post("/usuario", usuarioController.guardar);
router.get("/usuario/:id", usuarioController.mostrar);
router.put("/usuario/:id", usuarioController.modificar);
router.delete("/usuario/:id", usuarioController.eliminar);

module.exports = router