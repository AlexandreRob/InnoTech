// src/Register.js
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/users`, {
        email,
        password,
      });
      setMessage(res.data.message || "Inscription réussie");
    } catch (err) {
      setMessage(err.response?.data?.message || "Erreur lors de l’inscription");
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Inscription</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">S'inscrire</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
