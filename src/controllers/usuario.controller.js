import models from "./../models"

export const listar = async function(req, res){
    // Promesas
    // select * from usuarios
    models.Usuario.findAll()
                    .then(datos => {
                        res.json(datos);
                    })
                    .catch(error => {
                        res.json(error);
                    })
    // async await
    /*
    try{
        let datos = await models.Usuario.findAll();
        res.json(datos);
    }catch(error){
        res.json(error);
    }*/
}

export const guardar = async (req, res) => {
    // async/await
    try{
        let datos = req.body
        let respuesta = await models.Usuario.create(datos)
        res.json({mensaje: "Usuario registrado"});
    }catch(error){
        res.json(error);
    }
    
}