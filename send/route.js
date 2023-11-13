// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

interface EmailOptions {
  from: string;
  to: string[];
  subject: string;
  react: JSX.Element;
}

export default async function POST(req: any, res: any): Promise<any> {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  try {
    const emailOptions: EmailOptions = {
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    };

    const data = await resend.emails.send(emailOptions);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}