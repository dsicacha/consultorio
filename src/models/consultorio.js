const { Schema, model } = require ('mongoose');
const ConsultorioSchema = new Schema({
    fecha: {
        type:Date,        
        required:true
    },
    horaInicio:String,
    horaFin:String,
    responsable: String,
    casosRegistrados: {
        type:Object
    },
    name: String
    
}, {
    timestamps:true
})

module.exports = model('Consultorio',ConsultorioSchema);