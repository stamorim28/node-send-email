const express = require("express");
const router = express.Router();
const { sendEmail } = require("../utils/mailer");

router.post("/webhook", async (req, res) => {
  const { name, phone, scheduledTime } = req.body;

  // Enviar e-mail com os dados recebidos do webhook
  await sendEmail(name, phone, scheduledTime);

  // Enviar e-mail 10 minutos antes do horário agendado
  const tenMinutesBefore = scheduledTime - 10 * 60 * 1000;
  setTimeout(() => {
    sendEmail(name, phone, tenMinutesBefore);
  }, tenMinutesBefore - Date.now());

  res.status(200).send("OK");
});

module.exports = router;
