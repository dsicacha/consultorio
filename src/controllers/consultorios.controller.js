const consultorioCtrl = {};
const consultorioBD = require('../models/consultorio');

//crear consultorio
consultorioCtrl.crearConsultorio =async (req,res) =>{
    console.log(req.body);
    const {fecha, horaInicio, horaFin, responsable} = req.body;
    const newConsultorio = new consultorioBD({fecha, horaInicio, horaFin, responsable});
    
    await newConsultorio.save();
    res.send('Se creo un nuevo consultorio');
};

//listar consultorios
consultorioCtrl.listarConsultorios = (req,res) =>{
    res.send('Aca voy a listar consultorios');
};

//Editar Consultorios
consultorioCtrl.editarConsultorio = (req,res) =>{

};

//Eliminar consultorio
consultorioCtrl.eliminarConsultorio = async (req,res) =>{    
    await consultorioBD.findByIdAndDelete(req.params.id);
};




module.exports =consultorioCtrl;

