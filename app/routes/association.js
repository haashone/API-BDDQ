const express = require('express');
const router = express.Router();
const pool = require('../db/database');

//BARE AND LINE CHART 

//A CHAQUE FOIS DIRE COMBIEN
//combien d'étudiants sont membres d'assos dans l'ensim par année
router.get('/association/getAllEnsimAnnee', async function (req, res) {
    try {
        const sqlQuery = 'SELECT count(_QNbMembreEnsim_) AS nb, _QAnnee_ AS annee FROM sondage WHERE _QMembreEnsim_="Oui" GROUP BY _QAnnee_';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//combien d'étudiants sont membres d'assos dans l'univ par année
router.get('/association/getAllUnivAnnee', async function (req, res) {
    try {
        const sqlQuery = 'SELECT count(_QNbMembreUni_) AS nb, _QAnnee_ AS annee FROM sondage WHERE _QMembreUni_="Oui" GROUP BY _QAnnee_';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//combien d'étudiants sont membres d'assos dans l'ensim par genre
router.get('/association/getAllEnsimGenre', async function (req, res) {
    try {
        const sqlQuery = 'SELECT count(_QNbMembreEnsim_) AS nb, _QGenre_ AS genre FROM sondage WHERE _QMembreEnsim_="Oui" GROUP BY _QGenre_';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//combien d'étudiants sont membres d'assos dans l'univ par genre
router.get('/association/getAllUnivGenre', async function (req, res) {
    try {
        const sqlQuery = 'SELECT count(_QNbMembreUni_) AS nb, _QGenre_ AS genre FROM sondage WHERE _QMembreUni_="Oui" GROUP BY _QGenre_';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//combien d'étudiants sont membres d'assos dans l'ensim par filiere
router.get('/association/getAllEnsimFiliere', async function (req, res) {
    try {
        const sqlQuery = 'SELECT count(_QNbMembreEnsim_) AS nb, _QFiliere_ AS filiere FROM sondage WHERE _QMembreEnsim_="Oui" GROUP BY _QFiliere_';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//combien d'étudiants sont membres d'assos dans l'univ par filiere
router.get('/association/getAllUnivFiliere', async function (req, res) {
    try {
        const sqlQuery = 'SELECT count(_QNbMembreUni_) AS nb, _QFiliere_ AS filiere FROM sondage WHERE _QMembreUni_="Oui" GROUP BY _QFiliere_';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//combien d'étudiants sont adhérents d'assos dans l'ensim par année
router.get('/association/getAllAdherentEnsimAnnee', async function (req, res) {
    try {
        const sqlQuery = 'SELECT count(_QNbAdherentEnsim_) AS nb, _QAnnee_ AS annee FROM sondage WHERE _QAdherentEnsim_="Oui" GROUP BY _QAnnee_';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//combien d'étudiants sont adherent d'assos dans l'univ par année
router.get('/association/getAllAdherentUnivAnnee', async function (req, res) {
    try {
        const sqlQuery = 'SELECT count(_QNbAdherentUni_) AS nb, _QAnnee_ AS annee FROM sondage WHERE _QAdherentUni_="Oui" GROUP BY _QAnnee_';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//combien d'étudiants sont adherent d'assos dans l'ensim par genre
router.get('/association/getAllAdherentEnsimGenre', async function (req, res) {
    try {
        const sqlQuery = 'SELECT count(_QNbAdherentEnsim_) AS nb, _QGenre_ AS genre FROM sondage WHERE _QAdherentEnsim_="Oui" GROUP BY _QGenre_';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//combien d'étudiants sont adherents d'assos dans l'univ par genre
router.get('/association/getAllAdherentsUnivGenre', async function (req, res) {
    try {
        const sqlQuery = 'SELECT count(_QNbAdherentUni_) AS nb, _QGenre_ AS genre FROM sondage WHERE _QAdherentUni_="Oui" GROUP BY _QGenre_';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//combien d'étudiants sont adherents d'assos dans l'ensim par filiere
router.get('/association/getAllAdehrentEnsimFiliere', async function (req, res) {
    try {
        const sqlQuery = 'SELECT count(_QNbAdherentEnsim_) AS nb, _QFiliere_ AS filiere FROM sondage WHERE _QAdherentEnsim_="Oui" GROUP BY _QFiliere_';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//combien d'étudiants sont adherent d'assos dans l'univ par filiere
router.get('/association/getAllAdherentUnivFiliere', async function (req, res) {
    try {
        const sqlQuery = 'SELECT count(_QNbAdherentUni_) AS nb, _QFiliere_ AS filiere FROM sondage WHERE _QAdherentUni_="Oui" GROUP BY _QFiliere_';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//nombre d'heures consacrées aux asso de l'Univ
router.get('/association/getAllHeuresEnsim', async function (req, res) {
    try {
        const sqlQuery = 'SELECT _QTempsMembreEnsim_ AS heures FROM sondage WHERE _QMembreEnsim_="Oui"';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//nombre d'heures consacrées aux asso de l'Univ
router.get('/association/getAllHeuresUniv', async function (req, res) {
    try {
        const sqlQuery = 'SELECT _QTempsMembreUni_ AS heures FROM sondage WHERE _QMembreUni_="Oui"';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//fréquence à laquelle les adehrents vont aux event ENSIM
router.get('/association/getAllFrequenceAdherentEnsim', async function (req, res) {
    try {
        const sqlQuery = 'SELECT _QParticipationAdhEns_ AS frequence FROM sondage WHERE _QAdherentEnsim_="Oui"';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//fréquence à laquelle les adehrents vont aux event Univ
router.get('/association/getAllFrequenceAdherentUni', async function (req, res) {
    try {
        const sqlQuery = 'SELECT _QParticipationAdUni_ AS frequence FROM sondage WHERE _QAdherentUni_="Oui"';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//fréquence à laquelle les non adehrents vont aux event ENSIM
router.get('/association/getAllFrequenceNonAdherentEnsim', async function (req, res) {
    try {
        const sqlQuery = 'SELECT _QParticipationNAdEns_ AS frequence FROM sondage WHERE _QAdherentEnsim_="Non"';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//fréquence à laquelle les non adehrents vont aux event Univ
router.get('/association/getAllFrequenceNonAdherentUni', async function (req, res) {
    try {
        const sqlQuery = 'SELECT _QParticipationNAdUni_ AS frequence FROM sondage WHERE _QAdherentUni_="Non"';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//niveau satisfaction membres asso ENSIM
router.get('/association/getAllSatisfactionMembreEnsim', async function (req, res) {
    try {
        const sqlQuery = 'SELECT _QSatisfactionMemEns_ AS frequence FROM sondage WHERE _QMembreEnsim_="Oui"';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//niveau satisfaction membres asso Uni
router.get('/association/getAllSatisfactionMembreUni', async function (req, res) {
    try {
        const sqlQuery = 'SELECT _QSatisfactionMemUni_ AS frequence FROM sondage WHERE _QMembreUni_="Oui"';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//niveau satisfaction etudiants asso ENSIM
router.get('/association/getAllSatisfactionEtuEnsim', async function (req, res) {
    try {
        const sqlQuery = 'SELECT _QSatisfactionGlobEns_ AS frequence FROM sondage WHERE _QMembreEnsim_="Non"';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

//niveau satisfaction etudiants asso Uni
router.get('/association/getAllSatisfactionEtuUni', async function (req, res) {
    try {
        const sqlQuery = 'SELECT _QSatisfactionGlobUni_ AS frequence FROM sondage WHERE _QMembreUni_="Non"';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});




module.exports = router;