require("dotenv").config();

module.exports = {
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  receiverEmail: process.env.RECEIVER_EMAIL,
  defaults: {
    from: process.env.GMAIL_USER,
  },
};
