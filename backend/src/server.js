const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');

const app = express();


mongoose.connect('mongodb+srv://parronchi:parronchi@curso-ppuqe.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// req.query = Acessar query Params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = acessar corpo da requisição (para criação, edição)
app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));


app.listen(3030, () => console.log('Listen in port 3030'));