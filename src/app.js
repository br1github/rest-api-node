const express = require("express");
const morgan = require("morgan");
const conexionDB = require("./db.connect");
const routerEstudiantes = require('./routes/estudiantes.route');
const routerMaterias = require('./routes/materias.route');
const routerProfesores = require('./routes/profesores.route');
const app = express()

//Conexion a la BD
conexionDB()

//Settings
app.set("nombre","rest-api-nodejs")
app.set("port", process.env.port || 3500)

//Midlewares
app.use (express.json())
app.use (morgan("dev")) 

//Routes
app.use(express.static("public"))
app.use("/api/estudiantes", routerEstudiantes)
app.use("/api/materias", routerMaterias)
app.use("/api/profesores", routerProfesores)


  module.exports = app;