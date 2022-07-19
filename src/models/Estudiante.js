const { Schema, model } = require("mongoose");

const EstudianteSchema = new Schema ({

    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    estado : {
        type:Boolean,
        default: true
    },
    materias: [
        {
            nota: Number,
            nombre: String,
            comentario: String
        }
    ]
});

module.exports = model ("Estudiante", EstudianteSchema);