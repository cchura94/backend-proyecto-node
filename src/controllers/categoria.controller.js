import models from "./../models"

export const listar = async function(req, res){
    try{
        let lista_categorias = await models.Categoria.findAll();
        return res.status(200).send(lista_categorias);
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
        await models.Categoria.create(datos);
        return res.status(201).send({mensaje: "Categoria registrada"});
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

        let dato = await models.Categoria.findOne({
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

        await models.Categoria.update(req.body, {
            where: {id: id}
        });
        return res.status(200).send({mensaje: "Categoria modificada"});
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
        await models.Categoria.destroy({
            where: {id: id}
        });

        return res.status(200).send({mensaje: "Categoria eliminada"});
    }catch(error){
        return res.status(500).send({
            mensaje: error,
            error: true
        })
    }
}