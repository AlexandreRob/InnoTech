const mongoose = require("mongoose");

async function connectMongo() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ MongoDB connecté");
  } catch (err) {
    console.error("❌ Erreur de connexion MongoDB:", err);
  }
}

module.exports = connectMongo;
