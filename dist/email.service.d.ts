import { MailerService } from '@nestjs-modules/mailer';
import { EmailOptions } from './interfaces/email-options.interface';
export declare class EmailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendEmail(dto: EmailOptions): Promise<void>;
}
