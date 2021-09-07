import models from "./../models"
import bcrypt from "bcrypt"

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
        console.log("ANTES: ", req.body);
        let BCRYPT_SALT_ROUNDS = 12
        req.body.password = await bcrypt.hash(req.body.password, BCRYPT_SALT_ROUNDS)
        let datos = req.body

        console.log("DESPUES: ", req.body);        

        let respuesta = await models.Usuario.create(datos)
        res.json({mensaje: "Usuario registrado"});
    }catch(error){
        res.json(error);
    }    
}

export const mostrar = async (req, res) => {
    let id_usuario = req.params.id

    let usuario = await models.Usuario.findAll({
        where: {id: id_usuario}
    })
    res.json(usuario);
}

export const modificar = async (req, res) => {
    try{
        let id_usuario = req.params.id
        let usuario = await models.Usuario.update(req.body, {
            where: {id: id_usuario}
        })
    
        res.json({mensaje: "Usuario Modificado"});

    }catch(error){
        res.json(error);
    }    
}

export const eliminar = async (req, res) => {
    try{
        let id_usuario = req.params.id
        let usuario = await models.Usuario.destroy({
            where: {id: id_usuario}
        })
    
        res.json({mensaje: "Usuario Eliminado"});

    }catch(error){
        res.json(error);
    }   
}