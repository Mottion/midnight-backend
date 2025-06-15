import { Module } from '@nestjs/common';
import { UserModule } from './models/user/user.module';
import { AuthModule } from './providers/auth/auth.module';
import { PaymentModule } from './models/payment/payment.module';
import { PaymentTypeModule } from './models/payment-type/payment-type.module';
import { JoiPipeModule } from 'nestjs-joi';

@Module({
  imports: [
    UserModule,
    AuthModule,
    PaymentModule,
    JoiPipeModule,
    PaymentTypeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
