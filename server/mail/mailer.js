const nodemailer = require("nodemailer")

// Setup nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // Change the service as needed
  auth: {
    user: process.env.EMAIL_USER, // Use environment variables to hide sensitive information
    pass: process.env.EMAIL_PASS,
  },
})

function sendContactEmail(contactData) {
  const { name, email, message } = contactData
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Contact Message",
    text: `You have received a new message on your Portfolio from ${name} (${email}): ${message}`,
    html: `<p>You have received a new message on your Portfolio from <strong>${name}</strong> (${email}):</p><p>${message}</p>`, // HTML body
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Error sending email:", err)
    } else {
      console.log("Email sent:", info.response)
    }
  })
}

module.exports = { sendContactEmail }
