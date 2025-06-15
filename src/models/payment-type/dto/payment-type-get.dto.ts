import { JoiSchema, JoiSchemaOptions } from "nestjs-joi";
import * as Joi from 'joi';
import { PaymentType, Prisma } from "generated/prisma";

@JoiSchemaOptions({allowUnknown: false})
export class GetPaymentTypeDto implements Partial<Prisma.PaymentTypeCreateInput> {
  @JoiSchema(Joi.string().required())
  id: string;
  @JoiSchema(Joi.string().required())
  description: string;
  @JoiSchema(Joi.string().required())
  classes: string;

  constructor(args: PaymentType) {
    this.id = args.id,
    this.description = args.description,
    this.classes = args.classes
  }
}

