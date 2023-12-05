import nodemailer from 'nodemailer';
import {RawShape} from '@/components/Contacts/ContactsForm';

const receiverEmail = process.env.NM_EMAIL;
const pass = process.env.NM_EMAIL_PASS;

export const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: receiverEmail,
		pass,
	},
});

export const createMessage = (mess: RawShape) => {
	const {firstName, lastName, subject, email: senderEmail, message} = mess;

	return {
		from: `${firstName} ${lastName} <${senderEmail}>`,
		to: receiverEmail,
		subject,
		text: `
Contact data: ${firstName} ${lastName}
Contact email: <${senderEmail}>

Message:

${message}`,
	};
};
