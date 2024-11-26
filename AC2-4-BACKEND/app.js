const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 

require('dotenv').config();
const DB_USER = process.env.db_user
const DB_PASSWORD = process.env.db_key

const usuarioRouter = require('./routes/usuario');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/usuario', usuarioRouter);

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.vi1gr.mongodb.net/`)
    .then(() => {
        app.listen(3000, () => {
            console.log('Conectado ao mongoDB');
            console.log('Servidor iniciado na porta 3000');
        })
    })
    .catch((err) => {
        console.log(err);
    });