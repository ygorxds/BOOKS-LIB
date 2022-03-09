const express = require("express");
const Books = require("../model/books");
const router = express.Router();


router.get("/", async (req, res) => {
  try {

    const books = await Books.find()
    return res.send({ books });
  } catch (err) {

    return res.status(400).send({ error: "Erro na busca" });
  }
})


router.post('', async (req, res) => {


  try {
    const books = await Books.create(req.body);

    return res.send({ books });
  } catch (err) {

    return res.status(400).send({ error: "Registro Falhou" });

  }

});


router.put("/:id", async (req, res) => {

  try {
    const bookId = req.params.id
    const books = await Books.findByIdAndUpdate(bookId, req.body);

    return res.send({ books });
  } catch (err) {
    return res.status(400).send({ error: "A EDIÇÂO FALHOU CONSAGRADO" });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const booksId = req.params.id
    const books = await Books.findByIdAndDelete(booksId, req.body);

    return res.send({ books });
  } catch (err) {
    return res.status(400).send({ error: "NÂO FOI POSSIVEL DELETAR O LIVRO" });
  }
})

module.exports = router;
