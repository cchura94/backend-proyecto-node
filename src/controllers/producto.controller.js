import models from "./../models"

export const listar = async function(req, res){
    // 127.0.0.1:3000/api/producto?page=1&limit=10
    try{
        // paginación
        let page = req.query.page;
        let limit = req.query.limit;
        let offset = 0 + (page - 1) * limit;

        let lista_productos = await models.Producto.findAndCountAll({
            limit: limit,
            offset: offset
        });
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

export const asignar_producto = async function(req, res){
    let id = req.params.id
    let datos= req.body;

    let sucursal = await models.Sucursal.findOne({
        where: {id: datos.sucursal_id}
    });

    await sucursal.addProducto(id, {stock: datos.stock})
    return res.status(201).send({mensaje: "Producto Asignado a la sucursal"});
    //jan.addProject(homework, { started: false }) 
}