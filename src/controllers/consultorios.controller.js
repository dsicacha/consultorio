const consultorioCtrl = {};
const consultorioBD = require('../models/consultorio');

//crear consultorio
consultorioCtrl.crearConsultorio =async (req,res) =>{
    const {fecha, horaInicio, horaFin, responsable} = req.body;
    const newConsultorio = new consultorioBD({fecha, horaInicio, horaFin, responsable});    
    await newConsultorio.save();    
    res.send('Se creo un nuevo consultorio');
};

//listar consultorios
consultorioCtrl.listarConsultorios = async (req,res) =>{
    const Lista = await consultorioBD.find();
    res.json (Lista);
};

//Editar Consultorios
consultorioCtrl.editarConsultorio = async (req,res) =>{
    const {fecha, horaInicio, horaFin, responsable} = req.body;
    const result = await consultorioBD.findByIdAndUpdate(req.params.id,{fecha, horaInicio, horaFin, responsable},{new:true})    
    res.json(result);
};

//Eliminar consultorio
consultorioCtrl.eliminarConsultorio = async (req,res) =>{   
    const result = await consultorioBD.findByIdAndDelete(req.params.id);
    res.json(result);
};




module.exports =consultorioCtrl;

