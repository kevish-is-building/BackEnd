import nodemailer from "nodemailer";
import Mailgen from "mailgen";

const sendMail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "https://google.com",
    },
  });
  const emailText = mailGenerator.generatePlaintext(options.mailGenContent);
  const emailHtml = mailGenerator.generate(options.mailGenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      password: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: "",
    to: options.email,
    subject: options.subject,
    text: emailText,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mail)
  } catch (error) {
    console.error("failed to transport mail",error)
  }
};

const emailVerificationMailGenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to App!, less go",
      action: {
        instructions: "To verify your email click on the below link",
        button: {
          color: "#22BC66",
          text: "Verify Here",
          link: verificationUrl,
        },
      },
      outro: "Need help, Just reply your quarries to this mail.",
    },
  };
};

const forgotPasswordMailGenContent = (username, passwordUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to App!, less go",
      action: {
        instructions:
          "We got request to reset your password, click on the below link",
        button: {
          color: "#22BC66",
          text: "Reset Password",
          link: passwordUrl,
        },
      },
      outro: "Need help, Just reply your quarries to this mail.",
    },
  };
};
