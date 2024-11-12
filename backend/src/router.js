const express = require("express");
const router = express.Router();

//rotas
router.get("/", (req, res) => res.send("rota funcionando!"));

module.exports = router;
