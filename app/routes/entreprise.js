const express = require('express');
const router = express.Router();
const pool = require('../db/database');


router.get('/entreprise/getAll', async function (req, res) {
    try {
        const sqlQuery = 'select f.annee, SUM(f.montant) as montant from fait_ta_histo f, dim_entreprise d where f.id = d.id group by f.annee';
        const rows = await pool.query(sqlQuery);

        res.status(200).json(rows);


    } catch (error) {
        res.status(400).send(error.message)
    }


    // res.status(200).json({ id: req.params.id })
});


router.get('/entreprise/typeProjet', async function (req, res) {
    try {
        const sqlQuery = 'SELECT nature, count(*) as total FROM `fait_etudiant_projet` GROUP BY nature';
        const rows = await pool.query(sqlQuery);

        res.status(200).json(rows);

    } catch (error) {
        res.status(400).send(error.message)
    }


    // res.status(200).json({ id: req.params.id })
});


router.get('/entreprise/faitApprentis', async function (req, res) {
    try {
        const sqlQuery = 'SELECT year(dateDebut) as annee, count(*) as total FROM `fait_apprentis` where duree != 0 GROUP BY year(dateDebut)';
        const rows = await pool.query(sqlQuery);

        res.status(200).json(rows);


    } catch (error) {
        res.status(400).send(error.message)
    }


    // res.status(200).json({ id: req.params.id })
});


router.get('/entreprise/faitStage', async function (req, res) {
    try {
        const sqlQuery = 'SELECT year(dateDebut) as annee, count(*) as total FROM `fait_stage` where year(dateDebut) != 2 GROUP BY year(dateDebut)';
        const rows = await pool.query(sqlQuery);

        res.status(200).json(rows);


    } catch (error) {
        res.status(400).send(error.message)
    }


    // res.status(200).json({ id: req.params.id })
});


module.exports = router;