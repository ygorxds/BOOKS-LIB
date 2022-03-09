const express = require('express');
const router = express.Router();
const Users = require("../model/user")

router.get("/", async (req, res) => {
  try {
    const users = await Users.find()
    return res.send({ users });
  } catch (err) {
    return res.status(400).send({ error: "Erro na busca" })
  }
})

router.post('', async (req, res) => {

  try {
    const users = await Users.create(req.body);

    return res.send({ users });
  } catch (err) {

    return res.status(400).send({ error: "Registro falhou" });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const userId = req.params.id
    const users = await Users.findByIdAndUpdate(userId, req.body);

    return res.send({ users });
  } catch (err) {
    return res.status(400).send({ error: "EDIÇÃO DE USUÁRIO FALHOU" })
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const userId = req.params.id
    const users = await Users.findByIdAndDelete(userId, req.body)
    return res.send({ users });
  } catch (err) {
    return res.status(400).send({ error: "Não foi possível deletar" })

  }
})

module.exports = router;