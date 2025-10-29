// index.mjs
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("✅ Livents Token Server v13.1 is running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Livents Token Server running on port ${PORT}`);
});
