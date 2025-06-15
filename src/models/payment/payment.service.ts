import { Injectable } from '@nestjs/common';
import { PaymentRepository } from './payment.repository';
import { CreatePaymentDto } from './dto/payment-create.dto';
import { UpdatePaymentDto } from './dto/payment-update.dto';

@Injectable()
export class PaymentService {
  constructor(
    private readonly paymentRepository: PaymentRepository,
  ){}

  async create(payment: CreatePaymentDto, userId: string){
    const response = await this.paymentRepository.create({...payment, ownerId: userId });
    return response;
  }

  async update(payment: UpdatePaymentDto, userId: string){
    const response = await this.paymentRepository.update(payment, userId);
    return response;
  }

  async get(userId: string){
    const response = await this.paymentRepository.get(userId);
    return response;
  }

  async delete(id: string, userId: string){
    const response = await this.paymentRepository.delete(id, userId);
    return response;
  }
}
