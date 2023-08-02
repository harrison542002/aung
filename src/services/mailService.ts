const nodemailer = require("nodemailer");

export async function sendMail(email: string, message: string, name: string) {
  //create transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  //create mailOption
  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: "aungthiha12345mdy@gmail.com",
    subject: "Contact From " + name,
    text: `Email : ${email}\nMessage : ${message}`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error: any, response: any) => {
      if (error) {
        reject("ERROR");
      } else {
        resolve("SUCCESS");
      }
    });
  });
}
