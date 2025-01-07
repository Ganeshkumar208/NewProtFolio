import { WhatsappService } from './whatsapp.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('whatsapp')


export class WhatsappController {
    constructor(private readonly whatsappService: WhatsappService) { }

    // @Post('send-whatsapp')
    // async sendWhatsAppMessage(@Body() data: { name: string; email: string; subject: string; message: string }) {
    //     try {
    //         const response = await this.whatsappService.sendWhatsAppMessage(data);
    //         return { success: true, messageId: response.sid };
    //     } catch (error) {
    //         return { success: false, error: error.message };
    //     }
    // }


    @Post('send-whatsapp')
    async sendWhatsAppMessage(@Body() data: { name: string; email: string; subject: string; message: string }) {
        try {
            const response = await this.whatsappService.sendWhatsAppMessage(data);
            return { success: true, messageId: response.sid };
        } catch (error) {
            console.error('Error in sendWhatsAppMessage:', error.message);
            return { success: false, error: error.message }
        }
    }

    @Post('send-sms')
    async sendSms(@Body() data: { name: string; email: string; subject: string; message: string }) {
        try {
            const response = await this.whatsappService.sendSms(data);
            return { success: true, messageId: response.sid };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}