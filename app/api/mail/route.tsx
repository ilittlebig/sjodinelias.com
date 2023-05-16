import { NextResponse } from "next/server"
const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const OK_MESSAGE: string = "Ditt meddelande skickades i väg"
const ERROR_MESSAGE: string = "Det blev något fel, försök igen"
const SUBJECT: string = "sjodinelias.com | Meddelande"

export async function POST(req: Request) {
  const body = await req.json()
  const msg: string = `
    Name: ${body.firstName} ${body.lastName}\n
	Email: ${body.email}\n
	Message: ${body.message}
  `
  var message: string = ""

  await sgMail.send({
	to: "elias@jamee.se",
	from: "elias@jamee.se",
	subject: SUBJECT,
	text: msg,
  }).then(() => {
    message = OK_MESSAGE
  }).catch((error: Error) => {
    message = ERROR_MESSAGE
  })

  return new Response(JSON.stringify( { message: message } ))
}
