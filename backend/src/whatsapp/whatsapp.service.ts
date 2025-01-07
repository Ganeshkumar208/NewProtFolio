import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Twilio } from 'twilio';

@Injectable()

export class WhatsappService {
    private client: Twilio;

    constructor(private configService: ConfigService) {
        const accountSid = this.configService.get<string>('TWILIO_ACCOUNT_SID');
        const authToken = this.configService.get<string>('TWILIO_AUTH_TOKEN');

        // More specific logging to check if ConfigService is loaded correctly
        console.log('TWILIO_ACCOUNT_SID from Config:', accountSid);
        console.log('TWILIO_AUTH_TOKEN from Config:', authToken);

        if (!accountSid || !authToken) {
            throw new Error('Twilio configuration is missing.');
        }

        this.client = new Twilio(accountSid, authToken);
    }


    async sendWhatsAppMessage(data: { name: string; email: string; subject: string; message: string }): Promise<any> {
        const { name, email, subject, message } = data
        const formattedMessage = `
        New Form Submission:
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `;

        return this.client.messages.create({
            from: 'whatsapp:+14155238886', // Twilio WhatsApp Sandbox Number
            to: `whatsapp:${this.configService.get<string>('WHATSAPP_RECEIVER')}`, // Receiver WhatsApp number
            body: formattedMessage,
        });
    }

    async sendSms(data: { name: string; email: string; subject: string; message: string }): Promise<any> {
        const { name, email, subject, message } = data;
        const formattedMessage = `
        New Form Submission:
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `;

        return this.client.messages.create({
            from: this.configService.get<string>('TWILIO_PHONE_NUMBER'), // Twilio number
            to: this.configService.get<string>('SMS_RECEIVER'), // Receiver phone number
            body: formattedMessage,
        });
    }
}
