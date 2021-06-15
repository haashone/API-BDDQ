const express = require('express');
const router = express.Router();
const pool = require('../db/database');


/**
 *
 */

router.get('/international/experiencesParAnnee', async function (req, res) {
    try {
        const sqlQuery = 'SELECT annee, COUNT(*) as nbExperiences FROM experiences GROUP BY annee HAVING COUNT(*)>1 ORDER BY annee';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }


});

router.get('/international/semestresParAnnee', async function (req, res) {
  try {
      const sqlQuery = 'SELECT annee, COUNT(*) as nbSemestres FROM semestres GROUP BY annee HAVING COUNT(*)>1 ORDER BY annee';
      const rows = await pool.query(sqlQuery);

      res.status(200).json(rows);

  } catch (error) {
      res.status(400).send(error.message)
  }

});

router.get('/international/stages3AParAnnee', async function (req, res) {
  try {
      const sqlQuery = 'SELECT annee, COUNT(*) as nbStages FROM stages WHERE St_type="3A" GROUP BY annee ORDER BY annee';
      const rows = await pool.query(sqlQuery);

      res.status(200).json(rows);

  } catch (error) {
      res.status(400).send(error.message)
  }

});

router.get('/international/stages4AParAnnee', async function (req, res) {
  try {
      const sqlQuery = 'SELECT annee, COUNT(*) as nbStages FROM stages WHERE St_type="4A" GROUP BY annee ORDER BY annee';
      const rows = await pool.query(sqlQuery);

      res.status(200).json(rows);

  } catch (error) {
      res.status(400).send(error.message)
  }

});

router.get('/international/stages5AParAnnee', async function (req, res) {
  try {
      const sqlQuery = 'SELECT annee, COUNT(*) as nbStages FROM stages WHERE St_type="5A" GROUP BY annee ORDER BY annee';
      const rows = await pool.query(sqlQuery);

      res.status(200).json(rows);

  } catch (error) {
      res.status(400).send(error.message)
  }

});

router.get('/international/experiencesParPays', async function (req, res) {
  try {
      const sqlQuery = 'SELECT org_pays, COUNT(*) as nbExperiences FROM experiences GROUP BY org_pays ORDER BY COUNT(*) DESC';
      const rows = await pool.query(sqlQuery);
      res.status(200).json(rows);
  } catch (error) {
      res.status(400).send(error.message)
  }


});

router.get('/international/semestresParPays', async function (req, res) {
try {
    const sqlQuery = 'SELECT org_pays, COUNT(*) as nbSemestres FROM semestres WHERE org_pays <> "" GROUP BY org_pays ORDER BY COUNT(*) DESC';
    const rows = await pool.query(sqlQuery);

    res.status(200).json(rows);

} catch (error) {
    res.status(400).send(error.message)
}

});

router.get('/international/stagesParPays', async function (req, res) {
try {
    const sqlQuery = 'SELECT So_pays, COUNT(*) as nbStages FROM stages GROUP BY So_pays ORDER BY COUNT(*) DESC';
    const rows = await pool.query(sqlQuery);

    res.status(200).json(rows);

} catch (error) {
    res.status(400).send(error.message)
}

});



module.exports = router;
