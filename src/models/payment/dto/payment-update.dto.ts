import { JoiSchema, JoiSchemaOptions } from "nestjs-joi";
import * as Joi from 'joi';
import { Payment, PaymentCategory, PaymentMethod, PaymentStatus, Prisma } from "generated/prisma";

@JoiSchemaOptions({allowUnknown: false})
export class UpdatePaymentDto implements Partial<Prisma.PaymentUpdateInput> {
  @JoiSchema(Joi.string().required())
  id: string;
  @JoiSchema(Joi.string().required())
  description: string;
  @JoiSchema(Joi.number().required())
  value: number;
  @JoiSchema(Joi.date())
  paymentDate: string | Date;
  @JoiSchema(Joi.date().required())
  scheduledDate: string | Date;
  @JoiSchema(Joi.string().required())
  typeId: string;
  @JoiSchema(Joi.boolean().required())
  recurring: boolean;
  @JoiSchema(Joi.string().allow("", null))
  observation?: string | null;
  @JoiSchema(Joi.string().required().valid(... Object.values(PaymentCategory)))
  category: PaymentCategory;
  @JoiSchema(Joi.string().required().valid(... Object.values(PaymentStatus)))
  status: PaymentStatus;
  @JoiSchema(Joi.string().required().valid(... Object.values(PaymentMethod)))
  paymentMethod: PaymentMethod;

  constructor(args: Payment) {
    this.id = args.id,
    this.description = args.description,
    this.value = args.value,
    this.paymentDate = args.paymentDate,
    this.scheduledDate = args.scheduledDate,
    this.typeId = args.typeId,
    this.recurring = args.recurring,
    this.observation = args.observation,
    this.category = args.category,
    this.status = args.status,
    this.paymentMethod = args.paymentMethod
  }
}

