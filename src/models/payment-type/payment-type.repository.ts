import { Injectable } from "@nestjs/common";
import { Prisma } from "generated/prisma";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class PaymentTypeRepository {
  constructor(
    private readonly prisma: PrismaService,
  ){}

  async get(){
    const response = await this.prisma.paymentType.findMany();
    return response;
  }
}