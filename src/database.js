const mongoose = require('mongoose');


const { CONSULTORIO_APP_MONGODB_HOST, CONSULTORIO_APP_DATABASE } = process.env;
const MONGODB_URI= `mongodb://${CONSULTORIO_APP_MONGODB_HOST}/${CONSULTORIO_APP_DATABASE}`;

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
.then(db =>console.log('Database is connected'))
.catch(err => console.log(err));