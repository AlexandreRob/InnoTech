const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectMongo = require("./db/mongo");
const pg = require("./db/pg");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api", require("./routes/index"));
app.use("/api/users_mongo", require("./routes/users.mongo"));
app.use("/api/users_pg", require("./routes/users.pg"));

// Lancer la connexion Mongo au démarrage
connectMongo();

// Exemple test PostgreSQL (optionnel)
pg.query("SELECT NOW()")
  .then((res) => {
    console.log("🗃️ PostgreSQL connecté à", res.rows[0].now);
  })
  .catch(console.error);

const healthRoute = require("./routes/health");
app.use("/api", healthRoute);

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
