const nodemailer = require('nodemailer');

export default async (req, res) => {
  const { name, email, message, mobile } = req.body;

  try {
    // Set up nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: "rajanp2311@gmail.com",  // Use environment variables
        pass: "hiukznmmpdewmcco",
      },
    });

    // Define email options
    const mailOptions = {
      from: "rajanp2311@gmail.com",
      to: "rajanp2311@gmail.com",  // Change this to your intended recipient
      subject: 'Query/Feedback from CareerHook!',
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
};
