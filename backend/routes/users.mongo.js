const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Utilisateur déjà existant" });

    const user = new User({ email, password });
    await user.save();

    res.status(201).json({ message: "Utilisateur créé", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
