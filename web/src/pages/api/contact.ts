import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

type Data = {
   message: string
}

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
) {
   if (req.method === "POST") {
      const { name, email, message } = req.body
      // Use Nodemailer to send an email with the form data
      const transporter = nodemailer.createTransport({
         host: "smtp.gmail.com",
         port: 587,
         secure: false,
         auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
         },
      })

      const mailOptions = {
         from: email,
         to: process.env.EMAIL_USERNAME,
         subject: `New message from ${name}`,
         text: message,
      }

      try {
         const info = await transporter.sendMail(mailOptions)
         console.log("Email sent: ", info)
         res.status(200).json({ message: "Message sent successfully!" })
      } catch (error) {
         console.error(error)
         res.status(500).json({ message: "Failed to send message." })
      }
   } else {
      res.status(405).json({ message: "Method not allowed." })
   }
}
