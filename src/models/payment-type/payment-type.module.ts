import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service'; 
import { PaymentTypeRepository } from './payment-type.repository';
import { PaymentTypeController } from './payment-type.controller';
import { PaymentTypeService } from './payment-type.service';

@Module({
  controllers: [PaymentTypeController],
  providers: [PaymentTypeService, PrismaService, PaymentTypeRepository],
  exports: [PaymentTypeService],
  imports: []
})
export class PaymentTypeModule {}
