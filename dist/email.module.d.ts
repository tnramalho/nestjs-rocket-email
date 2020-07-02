import { DynamicModule } from '@nestjs/common';
import { EmailModuleOptions } from './interfaces/email-module-options.interface';
import { EmailModuleAsyncOptions } from './interfaces/email-module-async-options.interface';
export declare class EmailModule {
    /**
     * Register a pre-defined email transport
     * @param {EmailModuleOptions} options  A configurable options
     * definitions. See the structure of this object in the examples.
     */
    static register(options: EmailModuleOptions): DynamicModule;
    static registerAsync(options: EmailModuleAsyncOptions): DynamicModule;
}
