import express from 'express'
import multer from "multer"
let router = express.Router();
import * as usuarioController from "./../controllers/usuario.controller"
import * as authController from "./../controllers/auth.controller"
import * as categoriaController from "./../controllers/categoria.controller"
import * as sucursalController from "./../controllers/sucursal.controller"
import * as productoController from "./../controllers/producto.controller"

import * as authMiddleware from "./../middlewares/auth.middleware"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/imagenes')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

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
// router.get("/usuario", authMiddleware.auth, usuarioController.listar);
router.get("/usuario", usuarioController.listar);
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

// rutas productos
router.post("/producto/:id/asignar_producto", productoController.asignar_producto)

router.get("/producto", productoController.listar)
router.post("/producto", upload.single('imagen'), productoController.guardar)
router.get("/producto/:id", productoController.mostrar)
router.put("/producto/:id", upload.single('imagen'), productoController.modificar)
router.delete("/producto/:id", productoController.eliminar)


module.exports = router