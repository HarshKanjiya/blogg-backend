const express = require("express");
const app = express();

// firebase admin init
const admin = require("firebase-admin");
const cred = require("./config/serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(cred),
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5050;

app.get("/", async (req, res) => {
  res.send("server online!");
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}/ `);
});
