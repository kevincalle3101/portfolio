import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';
import ResponseEmailSend from '../../../components/ResponseEmailSend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "kevincalle3101@gmail.com",
      to: ["kevincalle3101@gmail.com", email],
      subject: subject,
      react: ResponseEmailSend({ subject, message }) as React.ReactElement,
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}