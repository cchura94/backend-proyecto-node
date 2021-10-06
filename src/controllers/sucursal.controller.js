import models from "./../models"

export const listar = async function(req, res){
    try{
        let lista_sucursales = await models.Sucursal.findAll({
            include: models.Producto
        });
        return res.status(200).send(lista_sucursales);
    }catch(error){
        return res.status(500).send({
            mensaje: error,
            error: true
        })
    }

}

export const guardar = async function(req, res){
     try{
        let datos = req.body
        await models.Sucursal.create(datos);
        return res.status(201).send({mensaje: "Sucursal registrada"});
    }catch(error){
        return res.status(500).send({
            mensaje: error,
            error: true
        })
    }
}

export const mostrar = async function(req, res){
    try{
        let id = req.params.id

        let dato = await models.Sucursal.findOne({
            where: {id: id}
        });
        return res.status(200).send(dato);
    }catch(error){
        return res.status(500).send({
            mensaje: error,
            error: true
        })
    }
}

export const modificar = async function(req, res){
    try{
        let id = req.params.id

        await models.Sucursal.update(req.body, {
            where: {id: id}
        });
        return res.status(200).send({mensaje: "Sucursal modificada"});
    }catch(error){
        return res.status(500).send({
            mensaje: error,
            error: true
        })
    }
}

export const eliminar = async function(req, res){
    try{
        let id = req.params.id
        await models.Sucursal.destroy({
            where: {id: id}
        });

        return res.status(200).send({mensaje: "Sucursal eliminada"});
    }catch(error){
        return res.status(500).send({
            mensaje: error,
            error: true
        })
    }
}