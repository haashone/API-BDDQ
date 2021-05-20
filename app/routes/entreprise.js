const express = require('express');
const router = express.Router();
const pool = require('../db/database');


router.get('/entreprise/getAll', async function (req, res) {
    try {
        const sqlQuery = 'select f.annee, SUM(f.montant) as montant from fait_ta_histo f, dim_entreprise d where f.id = d.id group by f.annee';
        const rows = await pool.query(sqlQuery);

        res.status(200).json(rows);

        var annee = [];
        var montant = [];

        for (var i in rows) {
            annee.push(rows[i].annee);
            montant.push(rows[i].montant);
        }

        console.log("annee : " + annee);
        console.log("montant : " + montant);


    } catch (error) {
        res.status(400).send(error.message)
    }


    // res.status(200).json({ id: req.params.id })
});



module.exports = router;