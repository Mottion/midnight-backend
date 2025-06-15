import { Body, Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Public } from 'src/providers/auth/public.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { pathId } from 'src/utils/dto/path-id';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ){}

  @Public()
  @Post()
  async create(@Body() body: CreateUserDto){
    return await this.userService.create(body);
  }

  @Get("/:id")
  async findById(@Param() params: pathId){
    return await this.userService.findById(params.id)
  }

}
