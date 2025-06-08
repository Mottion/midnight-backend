import { JoiSchema, JoiSchemaOptions } from "nestjs-joi";
import * as Joi from 'joi';
import { Prisma } from "generated/prisma";

@JoiSchemaOptions({allowUnknown: false})
export class createUserDto implements Prisma.UserCreateInput {
  @JoiSchema(Joi.string().required())
  name: string;
  @JoiSchema(Joi.string().required())
  email: string;
  @JoiSchema(Joi.string().required())
  password: string;
  
  constructor(args: Prisma.UserCreateInput) {
    this.name = args.name;
    this.email = args.email;
    this.password = args.password;
  }
}