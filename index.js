const express = require("express");
const webhookRoutes = require("./routes/webhook");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use("/webhook", webhookRoutes);

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});
