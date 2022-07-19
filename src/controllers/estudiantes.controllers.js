
const { restart } = require('nodemon');
const Estudiante = require('../models/Estudiante');

exports.Obtener = async (req, res) => {
  

  /**   
  console.log(req.params);
    const estudiantes = [
        {"nombre":"Hola",
        "correo":"Chau"},
        {
        "nombre":"Hola",
        "correo":"Chau"}
        ]
    res.json(estudiantes)
    */

  try {
    const estudiantes = await Estudiante.find();
    res.status(200).json(estudiantes)
  } catch (error) {
    res.status(500).json(error)
  }

}


  exports.Agregar = async (req, res) => {
    
  try {
    const {nombre, correo, materias}=req.body;
    
    if (nombre && correo) {
      const nuevoEstudiante = new Estudiante({nombre, correo, materias});
      await nuevoEstudiante.save();
      res.json({msj:"doc inserted", isOk:true});
    }else{
      res.status(200).json({isOf:false, msj:"los datos son requeridos"})
    }

  } catch (error) {
    res.status(500).json(error)
  }
  }

  exports.Actualizar = async (req, res) => {
    
    try {
      const id=req.params.id;
      const data=req.body;
      
      if (id && data){
        await Estudiante.findByIdAndUpdate(id, data)
        res.status(200).json({msj:"Actualizado correctamente", isOk:true});
      }else{
        res.status(400).json({msj:"datos insuficientes", isOk:false});
      }
      
    } catch (error) {
      res.status(500).json(error);
    }

  }

  exports.Borrar = async (req, res) => {
    const id=req.params.id;
    console.log(id)
    console.log("datos recibidos para eliminar",id)

    try {
      const eliminado = await Estudiante.findByIdAndUpdate(id, {estado: false});
      res.status(200).json({msj:"doc deleted", isOk:true});
    } catch (error) {
      res.status(500).json(error)
    }

  }