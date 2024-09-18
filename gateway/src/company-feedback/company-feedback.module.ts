import { Module } from '@nestjs/common';
import { CompanyFeedbackService } from './company-feedback.service';
import { CompanyFeedbackController } from './company-feedback.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'COMPANY-FEEDBACK',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3400,
        },
      },
    ]),
    AuthModule,
  ],
  controllers: [CompanyFeedbackController],
  providers: [CompanyFeedbackService],
})
export class CompanyFeedbackModule {}
