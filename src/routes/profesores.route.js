const {Router}=require("express");
const ctrProf = require('../controllers/profesores.controller');
const routerProfesor = Router();

routerProfesor.post('/registrar', ctrProf.registrar); 

routerProfesor.post('/login', ctrProf.login); 

module.exports=routerProfesor