import { Injectable } from "@nestjs/common";
import { Prisma } from "generated/prisma";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class PaymentRepository {
  constructor(
    private readonly prisma: PrismaService,
  ){}

  async create(
    data: Prisma.PaymentCreateManyInput,
  ){
    const response = await this.prisma.payment.create({
      data,
      include: {type: true}
    });
    return response;
  }

  async update(
    data: Prisma.PaymentUpdateInput,
    ownerId: string,
  ){
    const response = await this.prisma.payment.updateMany({
      where: {id: data.id as string, ownerId},
      data: data
    });
    return response;
  }

  async get(
    ownerId: string,
  ){
    const response = await this.prisma.payment.findMany({where: {ownerId}, include: {type: true}});
    return response;
  }

  async delete(
    id: string,
    ownerId: string,
  ){
    const response = await this.prisma.payment.delete({where: {ownerId, id}});
    return response;
  }
}