const express = require('express');
const router = express.Router();
const pool = require('../db/database');


/**
 * 
 */

router.get('/industriel/getAll', async function (req, res) {
    try {
        const sqlQuery = '';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//Get effectifs de tous les élèves classés par filière et année
router.get('/industriel/getStudentsAmount', async function (req, res) {
    try {
        const sqlQuery = 'SELECT * FROM  axe_industriel';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});



module.exports = router;