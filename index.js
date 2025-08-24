import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

// URL of your Render app
const RENDER_URL = "https://feel-alive.onrender.com/";

// Keep-alive function
async function keepAlive() {
  try {
    const res = await fetch(RENDER_URL);
    console.log(`[KEEP-ALIVE] Pinged ${RENDER_URL} - Status:`, res.status);
  } catch (err) {
    console.error("[KEEP-ALIVE] Error pinging site:", err.message);
  }
}

// Ping every 10 minutes
setInterval(keepAlive, 10 * 60 * 1000);

// Root route for Railway check
app.get("/", (req, res) => {
  res.send("🚂 Railway Keep-Alive Service Running");
});

app.listen(PORT, () => {
  console.log(`Keep-alive service running on port ${PORT}`);
});
