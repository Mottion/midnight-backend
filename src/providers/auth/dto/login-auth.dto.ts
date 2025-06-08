import { User } from "generated/prisma";

export class LoginAuthDto {
  email: string
  password: string

  constructor(args: User){
    this.email = args.email;
    this.password = args.password;
  }

  static validate(args: User){
    return true
  }
}