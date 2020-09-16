const { Router } = require('express');
const router = Router();

const { 
    crearConsultorio, 
    listarConsultorios, 
    editarConsultorio, 
    eliminarConsultorio 
} = require('../controllers/consultorios.controller');


//Crear consultorio
router.post('/consultorio/crear',crearConsultorio);

//Listar todos los consultorios
router.get('/consultorios/',listarConsultorios);

//Editar Consultorio
router.put('/consultorio/editar/:id',editarConsultorio);

//Eliminar consultorio
router.delete('/consultorio/eliminar/:id',eliminarConsultorio);

module.exports = router;