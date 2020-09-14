const { Schema, model } = require ('mongoose');
const ConsultorioSchema = new Schema({
    fecha: {
        type:Date,        
        required:true
    },
    responsable: String,
    casosRegistrados: {
        type: ObjectId,
        required:false

    },
    name: String
    
}, {
    timestamps:true
})

module.exports = model('Consultorio',ConsultorioSchema);