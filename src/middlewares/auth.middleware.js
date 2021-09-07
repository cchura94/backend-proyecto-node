import jwt from "jsonwebtoken"
import { JWT_SECRET, JWT_TIEMPO } from "./../config/config"

export const auth = function(req, res, next){
    let token = null;
    if(req.headers.authorization){
        // Authorization: Bearer asfkjafalfa.4mvmmwvvers.rwvrwirnw
        token = req.headers.authorization.split(" ")[1];
    }
    if(!token){
        return res.status(403).send({
            auth: false,
            mensaje: "No se proporcionó el token de seguridad"
        })
    }

    jwt.verify(token, JWT_SECRET, (error, decoded) => {
        if(error){
            return res.status(401).send({
                auth: false,
                mensaje: "Error de Autenticación"
            })
        }

        next();
    })

}