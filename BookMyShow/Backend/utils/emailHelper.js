const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const transport = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

function replaceContent(content, creds) {
  return Object.keys(creds).reduce((updatedContent, key) => {
    return updatedContent.replace(new RegExp(`#{${key}}`, "g"), creds[key]);
  }, content);
}

async function EmailHelper(templateName, receiverEmail, creds) {
  try {
    const templatePath = path.join(__dirname, "email_templates", templateName);
    let content = await fs.promises.readFile(templatePath, "utf-8");
    content = replaceContent(content, creds);
    const emailDetails = {
      to: receiverEmail,
      from: process.env.GMAIL_USER,
      subject: "Mail from Scaler BookMyShow",
      html: content,
    };
    await transport.sendMail(emailDetails);
    console.log("email sent");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error("Template file not found:", err.message);
    } else if (err.response && err.response.body) {
      console.error("Error sending email:", err.response.body);
    } else {
      console.error("Error occurred:", err.message);
    }
  }
}

module.exports = EmailHelper;
