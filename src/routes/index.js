import express from 'express'
let router = express.Router();

// rutas
router.get("/", function(req, res){
    res.json({mensaje: "Bienvenido a la api del proyecto"})
});

router.get("/saludo", function(req, res){
    res.json({mensaje: "Saludos Humanos!!"})
});


module.exports = router