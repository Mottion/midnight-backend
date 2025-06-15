import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/payment-create.dto';
import { UpdatePaymentDto } from './dto/payment-update.dto';

@Controller('payment')
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService
  ) {}

  @Post()
  async create(@Body() body: CreatePaymentDto, @Req() req: Request){
    return await this.paymentService.create(body, req["user"].id);
  }

  @Patch()
  async update(@Body() body: UpdatePaymentDto, @Req() req: Request){
    return await this.paymentService.update(body, req["user"].id);
  }

  @Get()
  async get(@Req() req: Request){
    return await this.paymentService.get(req["user"].id);
  }

  @Delete("/:id")
  async delete(@Param() path: string, @Req() req: Request){
    return await this.paymentService.delete(path["id"], req["user"].id);
  }

}
