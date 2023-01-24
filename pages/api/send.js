// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mailOptions, transporter } from '../../utils/nodemailer';

export default async function handler(req, res) {
  if(req.method === 'POST'){
    const data = req.body;
    
    //Sending the email through NodeMailer
    try {
      await transporter.sendMail({
        ...mailOptions,
        from: data.email,
        subject: `Message from ${data.name}`,
        text: "This is a test string",
        html: `<h1>You have received from ${data.name}</h1> \
        <p>${data.message}</p>`
      });
      res.status(200).json({success: true});
    } catch (error) {
      console.log(error)
      res.status(400).json({message: error.message})
    }
  }
}
