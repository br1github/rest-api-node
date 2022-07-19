const Profesor = require ("..//models/Profesor");
const jwt = require("jsonwebtoken");

exports.registrar = async (req, res) => {

    try{
        const {correo, clave} = req.body;

        if (correo && clave){
            const nuevoProfesor = new Profesor({correo, clave});
            nuevoProfesor.save();
            res.json({isOk:true, idProfesor:nuevoProfesor._id});

        }else {
            res.json({error: "Faltan datos"});
        }

    }catch (error){
        res.json({error})
    }

}


exports.login = async (req, res) => {

    try{
        const {correo, clave} = req.body;

        if (correo && clave){
            
            const profesor = await Profesor.findOne({correo});

            if (!profesor){
                res.json({error: "Datos invalidos"});
            }else{

                if (profesor.clave == clave){

                    const {_id, correo} = profesor;
                    const opt = { expiresIn:"1h" }
                    const palabra = "palabra-secreta";
                    const token = jwt.sign({_id, correo}, palabra, opt);
                    res.json({token});
                    

                }else {
                    res.json({error: "Datos invalidos"});
                }
            }
        }else {
            res.json({error: "Faltan datos"});
        }

    }catch (error){
        res.json({error})
    }

}