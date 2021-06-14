const express = require('express');
const router = express.Router();
const pool = require('../db/database');


/**
 * 
 */

router.get('/reussite/getCursus', async function (req, res) {
    try {
        const sqlQuery = 'SELECT * FROM cursus';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/reussite/getEchoue', async function (req, res) {
    try {
        const sqlQuery = 'SELECT COUNT(cursus.idEtu) as nbEtu FROM `cursus`, `reussite` WHERE cursus.idEtu = reussite.idEtu AND promo = "5A" AND annee < 2020 AND annee_diplome = ""';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/reussite/getReussiteTotal', async function (req, res) {
    try {
        const sqlQuery = 'SELECT COUNT(cursus.idEtu) as nbEtu FROM `cursus`, `reussite` WHERE cursus.idEtu = reussite.idEtu AND promo = "5A" AND annee < 2020 AND annee_diplome <> ""';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/reussite/villeProvenance', async function (req, res) {
    try {
        const sqlQuery = 'SELECT COUNT(*) as nb, `ville_provenance` FROM `reussite` WHERE `annee_diplome` <> "" GROUP BY `ville_provenance`';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/reussite/nbAbandon', async function (req, res) {
    try {
        const sqlQuery = 'SELECT COUNT(*) as nb FROM reussite WHERE abandon <> 000';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/reussite/nbNonAbandon', async function (req, res) {
    try {
        const sqlQuery = 'SELECT COUNT(*) as nb FROM reussite WHERE abandon = 000';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/reussite/nbPromo', async function (req, res) {
    try {
        const sqlQuery = 'SELECT COUNT(promo) as nbPromo, promo FROM cursus GROUP BY promo';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/reussite/nbAnnee', async function (req, res) {
    try {
        const sqlQuery = 'SELECT COUNT(promo) as nbPromo, annee FROM cursus GROUP BY annee';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});






module.exports = router;