import { Injectable } from "@nestjs/common";
import { PrismaClient } from "generated/prisma";

function extendPrismaClient() {
  const prisma = new PrismaClient();
  return prisma.$extends({
  });
}

const ExtendedPrismaClient = class {
  constructor() {
    return extendPrismaClient();
  }
} as new () => ReturnType<typeof extendPrismaClient>;

@Injectable()
export class PrismaService extends ExtendedPrismaClient {}