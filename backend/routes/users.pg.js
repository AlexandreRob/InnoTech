const express = require("express");
const router = express.Router();
const db = require("../db/pg");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existing = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ message: "Utilisateur déjà existant" });
    }

    const result = await db.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [email, password]
    );

    res.status(201).json({ message: "Utilisateur créé", user: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
