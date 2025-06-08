import { Module } from '@nestjs/common';
import { UserModule } from './models/user/user.module';
import { AuthModule } from './providers/auth/auth.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
