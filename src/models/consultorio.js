const { Schema, model } = require ('mongoose');
const ConsultorioSchema = new Schema({
    fecha: {
        type:Date,        
        required:true
    },
    password: String,
    date: {
        type: Date,
        default:new Date()
    },
    name: String
    
})

module.exports = model('User',userSchema);