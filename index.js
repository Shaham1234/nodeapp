const express = require("express");
const app = express();
const port = 3000;

// Read message from environment variable
const message = process.env.APP_MESSAGE || "Hello from Node.js!";
const podName = process.env.HOSTNAME || "unknown";

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body style="font-family: sans-serif; padding: 40px; background: #f0f4ff;">
        <h1>Node.js on AKS</h1>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Pod name:</strong> ${podName}</p>
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
