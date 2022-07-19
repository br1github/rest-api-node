const {Router}=require("express");
const ctrEst = require('../controllers/estudiantes.controllers');
const autorizaProfesor = require ("../auth/auth.profesor");
const routerEstudiantes = Router();

routerEstudiantes.get('/', autorizaProfesor, ctrEst.Obtener);  

  routerEstudiantes.post('/', ctrEst.Agregar); 

  routerEstudiantes.put('/:id', ctrEst.Actualizar); 

  routerEstudiantes.delete('/:id', ctrEst.Borrar); 

  module.exports=routerEstudiantes;