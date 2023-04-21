import { NextApiRequest, NextApiResponse } from "next"
import sendgrid from "@sendgrid/mail"

type ResponseData = {
   message: string
}

sendgrid.setApiKey(process.env.SEND_GRID!)

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<ResponseData>
) {
   try{
      sendgrid.send({
         to: "laupwing@gmail.com",
         from: "laupwing@hotmail.com",
         subject: req.body.subject,
         html: `<div>
            You got mail from ${req.body.name} with the email ${req.body.email} the message is: ${req.body.message}
         </div>`
      })
         .then(() => {
            console.log('Email sent')
         })
         .catch((error) => {
            console.error(error.response.body)
         })
      return res.status(200).json({ message: ""})
   }catch(err) {
      return res.status(500)
   }
}