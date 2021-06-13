const express = require('express');
const router = express.Router();
const pool = require('../db/database');


router.get('/entreprise/getAll', async function (req, res) {
    try {
        const sqlQuery = 'select annee, SUM(montant) as montant from fait_ta_histo group by annee';
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


router.get('/entreprise/faitStageEntranger', async function (req, res) {
    try {
        const sqlQuery = 'SELECT year(dateDebut) as annee, count(*) as total FROM `fait_stage` fs join dim_zone z on fs.idEntreprise = z.id where year(dateDebut) != 2 and z.pays not like "france" or z.pays not LIKE "France" GROUP BY year(dateDebut)';
        const rows = await pool.query(sqlQuery);

        res.status(200).json(rows);


    } catch (error) {
        res.status(400).send(error.message)
    }


    // res.status(200).json({ id: req.params.id })
});

router.get('/entreprise/faitStageParPays', async function (req, res) {
    try {
        const sqlQuery = 'select pays, count(pays) as total from fait_stage f join dim_zone d on f.idEntreprise = d.id GROUP by pays';
        const rows = await pool.query(sqlQuery);

        res.status(200).json(rows);


    } catch (error) {
        res.status(400).send(error.message)
    }


    // res.status(200).json({ id: req.params.id })
});


router.get('/entreprise/nbRelationAvecEnsim', async function (req, res) {
    try {
        const sqlQuery = 'SELECT sum(NbrFournisseur) as NbrFournisseur , sum(NbrStage) as NbrStage, sum(NbrParrainage) as NbrParrainage, sum(NbrAlumni) as NbrAlumni, sum(NbrEtudiantSemestre) as NbrEtudiantSemestre, sum(NbrApprentis) as NbrApprentis FROM `fait_type`';
        const rows = await pool.query(sqlQuery);

        res.status(200).json(rows);


    } catch (error) {
        res.status(400).send(error.message)
    }


    // res.status(200).json({ id: req.params.id })
});

router.get('/entreprise/nbrParrainage', async function (req, res) {
    try {
        const sqlQuery = 'SELECT annee, COUNT(*) as total FROM `fait_parrainage` where annee <> 0 GROUP BY annee';
        const rows = await pool.query(sqlQuery);

        res.status(200).json(rows);


    } catch (error) {
        res.status(400).send(error.message)
    }


    // res.status(200).json({ id: req.params.id })
});

router.get('/entreprise/nbrProjetParFiliere', async function (req, res) {
    try {
        const sqlQuery = "SELECT CONCAT('Projets - ', ' ', filiere ) As filiere , count(*) as total FROM `fait_etudiant_projet` GROUP BY filiere";
        const rows = await pool.query(sqlQuery);

        res.status(200).json(rows);


    } catch (error) {
        res.status(400).send(error.message)
    }


    // res.status(200).json({ id: req.params.id })
});

router.get('/entreprise/nbrInfo', async function (req, res) {
    try {
        const sqlQuery = 'SELECT count(*) as totalInfo  FROM `fait_specialite` where info = 1';
        const rows = await pool.query(sqlQuery);

        res.status(200).json(rows);


    } catch (error) {
        res.status(400).send(error.message)
    }


    // res.status(200).json({ id: req.params.id })
});

router.get('/entreprise/nbrVac', async function (req, res) {
    try {
        const sqlQuery = 'SELECT count(*) as totalVac  FROM `fait_specialite` where vac = 1';
        const rows = await pool.query(sqlQuery);

        res.status(200).json(rows);


    } catch (error) {
        res.status(400).send(error.message)
    }


    // res.status(200).json({ id: req.params.id })
});

router.get('/entreprise/nbrEntrepriseEtranger', async function (req, res) {
    try {
        const sqlQuery1 = 'SELECT count(*) as total FROM `dim_zone` where pays not like "france"';
        const sqlQuery2 = 'SELECT count(*) as total FROM `dim_zone` where pays  like "france"';

        const rows1 = await pool.query(sqlQuery1);
        const rows2 = await pool.query(sqlQuery2);

        res.status(200).json(rows1.concat(rows2));


    } catch (error) {
        res.status(400).send(error.message)
    }


    // res.status(200).json({ id: req.params.id })
});





module.exports = router;