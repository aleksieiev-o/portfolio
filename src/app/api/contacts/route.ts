import {createMessage, transporter} from '@/lib/nodemailer';

export const POST = async (req: Request) => {
  const reqBody = await req.json();

  try {
    await transporter.sendMail(createMessage(reqBody));

    return Response.json({ success: true });
  } catch (err) {
    console.warn(err);
    return Response.json({ status: 400, message: 'Bad request' });
  }
};
