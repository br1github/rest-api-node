const mongoose = require('mongoose');


const conexionDB = async ()=> {
    try {
        const DB = await mongoose.connect('mongodb://localhost:27017/test-estudiantes');
        console.log("Conexion BD correcta ", DB.connection.name)
    }catch (error){
        console.log(error);
    }
}

module.exports = conexionDB;