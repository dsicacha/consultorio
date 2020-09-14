const { Schema, model } = require('mongoose')

const casosSchema = new Schema({
    titulo:{
        type: String
    },
    description:{
        type: String
    } ,
    categoria:{
        type: String
   },
   responsable:{
        type: String
    },
    date: {
        type: Date,
        default:new Date()
    },  
})

module.exports = model('casos', casosSchema)