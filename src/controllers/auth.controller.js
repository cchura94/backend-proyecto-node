import models from "./../models"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { JWT_SECRET, JWT_TIEMPO } from "../config/config";

export const login = async function(req, res){
    // {correo: "abc@gmail.com", password: "abc123"}
    let datos = req.body;
    // verificar la existenacia del usuario en la BD
    let user = await models.Usuario.findOne({
        where: {correo: datos.correo}
    });
    
    if(!user){
        return res.json({
            mensaje: "El correo es Incorrecto",
            error: true
        })
    }

    // comparar la contraseña si el usuario existe
    let correcto = await bcrypt.compare(datos.password, user.password)
    if(correcto){
        // generar un hash JWT
        let payload = {
            correo: user.correo,
            id: user.id,
            time: new Date()
        }

        let token = jwt.sign(payload, JWT_SECRET, {
            expiresIn: JWT_TIEMPO
        })
        // responder el token + datos del usuario
        res.json({
            access_token: token,
            usuario: {
                id: user.id,
                nombre: user.nombre,
                correo: user.correo
            },
            error: false
        })


    }else{
        res.json({
            mensaje: "Contraseña Incorrecta",
            error: true
        })
    }


    


}

const perfil = async function(req, res){

}