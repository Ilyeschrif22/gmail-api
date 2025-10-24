const express = require("express");
const router = express.Router();
const { sendEmail } = require("../services/gmailService");

router.post("/send-email", async (req, res) => {
  try {
    await sendEmail(req.body);
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email Error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = router;
