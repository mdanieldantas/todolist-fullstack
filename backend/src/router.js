const express = require("express");
const router = express.Router();

//rotas
router.get("/tasks", (req, res) => res.send("rota funcionando!"));

module.exports = router;
