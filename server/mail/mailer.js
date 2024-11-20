const nodemailer = require('nodemailer');

// Setup nodemailer transporter
const transporter = nodemailer.createTransport({
	service: 'gmail', // Change the service as needed
	auth: {
		user: process.env.EMAIL_USER, // Use environment variables to hide sensitive information
		pass: process.env.EMAIL_PASS,
	},
});

function sendContactEmail(contactData) {
	const { name, email, message } = contactData;
	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: process.env.EMAIL_USER,
		subject: 'New Message from Your Portfolio',
		text: `
  You have received a new message on your Portfolio:
  
  Name: ${name}
  Email: ${email}
  Message:
  ${message}
  
  Time: ${new Date().toLocaleString()}
    `,
		html: `
    <h2>New Portfolio Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
    <p><strong>Time:</strong> ${new Date().toLocaleString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
		})}</p>
    `,
	};

	transporter.sendMail(mailOptions, (err, info) => {
		if (err) {
			console.error('Error sending email:', err);
		} else {
			console.log('Email sent:', info.response);
		}
	});
}

module.exports = { sendContactEmail };
