import models from "./../models"

export const listar = async function(req, res){
    try{
        let lista_productos = await models.Producto.findAll();
        return res.status(200).send(lista_productos);
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
        // subir la imagen
        if(req.file){
            datos.imagen = req.file.filename
        }
        // guardar
       await models.Producto.create(datos);
       return res.status(201).send({mensaje: "Producto registrado"});
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

        let dato = await models.Producto.findOne({
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
        let datos = req.body
        // subir la imagen
        if(req.file){
            datos.imagen = req.file.filename
        }
        // guardar
       await models.Producto.update(datos, {where: {id}});
       return res.status(201).send({mensaje: "Producto Modificado"});
   }catch(error){
       return res.status(500).send({
           mensaje: error,
           error: true
       })
   }
}

export const eliminar = async function(req, res){
    let id = req.params.id
    await models.Producto.destroy({
        where: {
            id
        }
    })

    return res.status(201).send({mensaje: "Producto Eliminado"});
}