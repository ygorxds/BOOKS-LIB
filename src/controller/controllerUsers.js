const express = require('express');
const router = express.Router();
const Users = require("../model/user")


router.post('', async (req, res) => {

  try {
    const users = await Users.create(req.body);

    return res.send({ users });
  } catch (err) {

    return res.status(400).send({ error: "Registro falhou" });
  }
});

module.exports = router;