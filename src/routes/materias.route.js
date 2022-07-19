const {Router}=require("express")
const ctrMat = require('../controllers/materias.controlles')
const routerMaterias = Router()

routerMaterias.get('/:idEst', ctrMat.ObtenerMaterias);

routerMaterias.post('/:idEst', ctrMat.InsertarMateria);

routerMaterias.delete('/:idEst/:idMat', ctrMat.EliminarMateria);

routerMaterias.put('/:idEst/:idMat', ctrMat.ActualizarMateria);

  module.exports=routerMaterias;