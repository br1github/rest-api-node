const Profesor = require("../models/Profesor");
const jwt = require("jsonwebtoken");
const { json } = require("express");

const autorizarProfesor = async (req, res, next) => {
    const strToken = req.headers.authorization;

if (!strToken){
    return res.json({msg: "Token no encontrado"});
}

try {

    const token = strToken.split(" ")[1];
    const llave = jwt.verify(token, "palabra-secreta");
    const profesor = await Profesor.findById(llave._id);

    if (!profesor){
        return res.json({msg: "Profesor no encontrado"});
    }

} catch (error) {
    return res.json({msg: "Profesor no encontrado"});
}


    
    next();
}

module.exports = autorizarProfesor;