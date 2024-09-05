import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;  // Tu correo personal
const fromEmail = process.env.FROM_EMAIL;  // Dirección desde la que se envía

export async function POST(req) {
  try {
    const body = await req.json();  // Captura los datos del formulario
    const { email, subject, message } = body;
    
    console.log("----------------------------------");
    console.log(body);
    console.log("----------------------------------");

    const response = await resend.emails.send({
      from: fromEmail,
      to: [toEmail, email],  // Envía tanto a tu correo como al del usuario
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>Email that contacted you: {email}</p>  {/* Email del usuario */}
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    if (response.error) {
      return NextResponse.json({ error: response.error }, { status: 500 });
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}