import nodemailer from "nodemailer";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-app-password",
  },
});

app.post("/send-email", async (req, res) => {
  const { userEmail, consultantName, meetingType, meetingPrice } = req.body;

  const mailOptions = {
    from: "your-email@gmail.com",
    to: userEmail,
    subject: `Consultation Booking Confirmation with ${consultantName}`,
    text: `Dear User,

Your ${meetingType} consultation with ${consultantName} has been successfully booked. 
Details:
- Type: ${meetingType}
- Price: ₹${meetingPrice}

You will receive further details soon.

Best regards,
Consultation Team`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    res.status(500).send("Error sending email");
  }
});

app.listen(5000, () => console.log("Email server running on port 5000"));
