const express = require("express");
const Books = require("../model/books");
const router = express.Router();



router.post('', async (req, res) => {


  try {
    const books = await Books.create(req.body);

    return res.send({ books });
  } catch (err) {

    return res.status(400).send({ error: "Registro Falhou" });

  }

});

module.exports = router;