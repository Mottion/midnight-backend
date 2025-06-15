import { Injectable } from '@nestjs/common';
import { PaymentTypeRepository } from './payment-type.repository';

@Injectable()
export class PaymentTypeService {
  constructor(
    private readonly paymentTypeRepository: PaymentTypeRepository,
  ){}

  async get(){
    const response = await this.paymentTypeRepository.get();
    return response;
  }
}
