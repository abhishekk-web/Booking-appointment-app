const path = require('path');

const express = require('express');

const insertController = require('../controllers/insert');

const router = express.Router();

// router.get('/add-data', insertController.getAddData);

router.post('/data', insertController.postAddData);

router.get('/getUsers', insertController.getUsers );

router.delete('/deleteUser/:id', insertController.getDeleteUser);



module.exports = router;