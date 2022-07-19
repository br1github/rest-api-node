const { Schema, model } = require("mongoose");

const ProfesorSchema = new Schema ({

    correo: {
        type: String,
        unique: true,
        required: true
    },
    
    clave: {
        type: String,
        unique: true,
        required: true
    }
});

module.exports = model ("Profesor", ProfesorSchema);