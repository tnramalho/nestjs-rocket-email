import { Module, DynamicModule } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailService } from './email.service';
import { EmailModuleOptions } from './interfaces/email-module-options.interface';
@Module({})
export class EmailModule {
  /**
   * Register a pre-defined email transport
   * @param {EmailModuleOptions} options  A configurable options
   * definitions. See the structure of this object in the examples.
   */
  public static register(options: EmailModuleOptions): DynamicModule {
    return {
      module: EmailModule,
      imports: [
        MailerModule.forRootAsync({
          useFactory: () => options,
        }),
      ],
      providers: [EmailService],
      exports: [EmailService],
    };
  }
}
