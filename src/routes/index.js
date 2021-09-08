import express from 'express'
let router = express.Router();
import * as usuarioController from "./../controllers/usuario.controller"
import * as authController from "./../controllers/auth.controller"
import * as categoriaController from "./../controllers/categoria.controller"
import * as sucursalController from "./../controllers/sucursal.controller"

import * as authMiddleware from "./../middlewares/auth.middleware"
// rutas
router.get("/", function(req, res){
    res.json({mensaje: "Bienvenido a la api del proyecto"})
});

router.get("/saludo", function(req, res){
    res.json({mensaje: "Saludos Humanos!!"})
});

// Autenticación
router.post("/login", authController.login);

// rutas usuario
router.get("/usuario", authMiddleware.auth, usuarioController.listar);
router.post("/usuario", usuarioController.guardar);
router.get("/usuario/:id", usuarioController.mostrar);
router.put("/usuario/:id", usuarioController.modificar);
router.delete("/usuario/:id", usuarioController.eliminar);

// rutas categorias
router.get("/categoria", categoriaController.listar)
router.post("/categoria", categoriaController.guardar)
router.get("/categoria/:id", categoriaController.mostrar)
router.put("/categoria/:id", categoriaController.modificar)
router.delete("/categoria/:id", categoriaController.eliminar)

// rutas sucursales
router.get("/sucursal", sucursalController.listar)
router.post("/sucursal", sucursalController.guardar)
router.get("/sucursal/:id", sucursalController.mostrar)
router.put("/sucursal/:id", sucursalController.modificar)
router.delete("/sucursal/:id", sucursalController.eliminar)

module.exports = router