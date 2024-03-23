import nodemailer from "nodemailer";

// this function takes three parameters to be executed
export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    //configure mail for usage

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });

    const mailOptions = {
      from: "usamarazaaq3@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Rest your password",
      html: "<b>Hello world?</b>",
    };

    const mailResponse = await transporter.sendMail(mailOptions);

    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
