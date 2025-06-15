import { Controller, Get } from '@nestjs/common';
import { PaymentTypeService } from './payment-type.service';

@Controller('payment-type')
export class PaymentTypeController {
  constructor(
    private readonly paymentTypeService: PaymentTypeService
  ) {}

  @Get()
  async get(){
    return await this.paymentTypeService.get();
  }
}
