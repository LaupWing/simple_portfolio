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
      console.log(req.body)
      sendgrid.send({
         to: "laupwing@gmail.com",
         from: "laupwing@hotmail.com",
         subject: "req.body.subject",
         html: "<div>You've got a mail</div>"
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