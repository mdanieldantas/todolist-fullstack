const express = require('express');
const tasksController = require('./controllers/tasksController');

const router = express.Router();

//rotas
router.get("/tasks", tasksController.getAll);

module.exports = router;
