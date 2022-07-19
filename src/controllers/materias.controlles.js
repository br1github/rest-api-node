const Estudiante = require('../models/Estudiante');

exports.ObtenerMaterias = async (req, res) => {

try {
    if (req.params.idEst){
        const idEst = req.params.idEst;
        console.log(idEst)
        const estudiante = await Estudiante.findById(idEst);
        res.json(estudiante.materias)
    }else{
        res.status(400).json({error:"Debe enviar el id"})
    }
} catch (error) {
    res.status(500).json({error})
}

}


exports.InsertarMateria = async (req, res) => {
    
    try {
        if (req.params.idEst && req.body){

            const idEst = req.params.idEst;
            const materia = req.body;
            const estudiante = await Estudiante.findById(idEst);

            estudiante.materias.push(materia);
            await estudiante.save();
            console.log("todo Ok");
            res.status(200).json({isOk:true});

        }else{
            res.status(400).json({error:"Debe enviar el id"})
        }
    } catch (error) {
        res.status(500).json({error})
    }
    
    }



exports.EliminarMateria = async (req, res) => {
    
    try {
        if (req.params.idEst && req.params.idMat){
    
            const idEst = req.params.idEst;
            const idMat = req.params.idMat;
            const estudiante = await Estudiante.findById(idEst);

            for (let index = 0; index < estudiante.materias.length; index++) {
                if(estudiante.materias[index]._id == idMat){
                    estudiante.materias.splice(index, 1);
                }                
            }
            await estudiante.save();
            res.status(200).json({isOk:true});

        }else{
            res.status(400).json({error:"Debe enviar el id"})
        }
    } catch (error) {
        res.status(500).json({error})
    }
        
}


exports.ActualizarMateria = async (req, res) => {
    
    try {
        if (req.params.idEst && req.params.idMat && req.body){
    
            const idEst = req.params.idEst;
            const idMat = req.params.idMat;
            const data = req.body;
            const estudiante = await Estudiante.findById(idEst);

            for (let index = 0; index < estudiante.materias.length; index++) {
                if(estudiante.materias[index]._id == idMat){

                    Object.assign(estudiante.materias[index],data);
                    

                }                
            }
            await estudiante.save();
            res.status(200).json({isOk:true});

        }else{
            res.status(400).json({error:"Debe enviar el id y el body"})
        }
    } catch (error) {
        res.status(500).json({error})
    }
        
}