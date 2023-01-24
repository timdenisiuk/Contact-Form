import nodemailer from 'nodemailer'

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

//Nodemailer transport object for send API
export const transporter = nodemailer.createTransport({
    tls: {
        rejectUnauthorized: false
    },
    service: 'gmail',
    auth: {
        user: email,
        pass,
    },
});

//Mail options so to not have to write in every API declaration
export const mailOptions = {
    to: email,
}