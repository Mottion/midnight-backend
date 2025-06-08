import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { Prisma, User } from "generated/prisma";
import { createUserDto } from "./dto/create-user.dto";
import { pickSelect } from "src/utils/pick-select";

@Injectable()
export class UserRepository {
  constructor(
    private readonly prisma: PrismaService,
  ){}

  async findByEmail(
    email: string,
    keys: (keyof Prisma.UserSelect)[] = ["id", "password", "name"]
  ){
    const response = await this.prisma.user.findUnique({
      where: {email}, 
      select: pickSelect(keys) as Prisma.UserSelect
    });
    return response;
  }

  async create(
    user: createUserDto,
    keys: (keyof Prisma.UserSelect)[] = ["id", "name"]
  ){
    const response = await this.prisma.user.create({
      data: user,
      select: pickSelect(keys) as Prisma.UserSelect
    });
    return response;
  }

  async findById(
    id: string,
    keys: (keyof Prisma.UserSelect)[] = ["id", "email", "name"]
  ){
    const response = await this.prisma.user.findFirst({
      where: {id},
      select: pickSelect(keys) as Prisma.UserSelect
    });
    return response;
  }

  async deleteById(
    id: string,
  ){
    const response = await this.prisma.user.delete({
      where: {id},
    });
    return response;
  }

  async update(
    id: string,
    data: Prisma.UserUpdateInput,
    userId?: string,
    keys: (keyof Prisma.UserSelect)[] = ["id", "email", "name"],
  ){
    const response = await this.prisma.user.update({
      where: {id},
      data: data,
      select: {
        ...pickSelect(keys) as Prisma.UserSelect,
      },
    });
    return response;
  }

  async getById(
    id: string,
    keys: (keyof Prisma.UserSelect)[] = ["id", "name", "email"]
  ){
    const response = await this.prisma.user.findFirst({
      where: {id},
      select: pickSelect(keys) as Prisma.UserSelect
    });
    return response;
  }
}