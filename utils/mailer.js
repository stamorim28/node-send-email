const nodemailer = require("nodemailer");
const { format } = require("date-fns");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const sendEmail = async (name, phone, scheduledTime) => {
  const formattedTime = format(scheduledTime, "dd/MM/yyyy HH:mm:ss");

  const mailOptions = {
    from: "testamais.01@gmail.com",
    to: "testamais.01@gmail.com",
    subject: "Novo agendamento",
    text: `Nome: ${name}\nTelefone: ${phone}\nHorário: ${formattedTime}`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
