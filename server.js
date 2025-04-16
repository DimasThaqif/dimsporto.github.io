const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config(); // 🔐 Untuk menggunakan .env

// Express app config
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("✅ Server Running on port 5000"));

// Check env variables
console.log("Using email:", process.env.EMAIL_USER);

// Setup transporter
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verifikasi transporter
contactEmail.verify((error) => {
  if (error) {
    console.error("❌ Transporter Error:", error);
  } else {
    console.log("✅ Ready to Send Emails");
  }
});

// Endpoint untuk menerima pesan dari form
router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  console.log("📩 New message received:");
  console.log({ name, email, phone, message });

  const mail = {
    from: `${name} <${email}>`, // format yang benar
    to: process.env.EMAIL_USER, // tujuan adalah email kamu
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("❌ Failed to send email:", error);
      res.json({ code: 500, status: "Failed to send message", error });
    } else {
      console.log("✅ Email sent successfully");
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
