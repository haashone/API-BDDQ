const express = require('express');
const dotenv = require('dotenv');


const PORT = process.env.PORT || '3001';

const app = express();


/**
 * Middleware
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Route principal (Home Page)
 */

app.get('/', (request, response) => {
    response.status(200).send("API - Base des données qualité 2020 - 2021")
})

/**
 * Déclaration des Routes selon les axes
 * • Association
 * • Réussite
 * • Industriel
 * • International
 * • Entreprise
 */

const associationRouter = require('./app/routes/association');
const reussiteRouter = require('./app/routes/reussite');
const industrielRouter = require('./app/routes/industriel');
const internationalRouter = require('./app/routes/international');
const entrepriseRouter = require('./app/routes/entreprise');

app.use('/', associationRouter);
app.use('/', reussiteRouter);
app.use('/', industrielRouter);
app.use('/', internationalRouter);
app.use('/', entrepriseRouter);

/**Start listening */
app.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`)
})