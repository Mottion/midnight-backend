import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from './user.repository';
import { createUserDto } from './dto/create-user.dto';
import { AccessTokenDto } from 'src/providers/auth/dto/access-token.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ){}

  async create(user: createUserDto){
    const response = await this.userRepository.create(user);
    const payload = { id: response.id, name: response.name };
    return new AccessTokenDto(await this.jwtService.signAsync(payload));
  }

  async findById(id: string){
    const response = await this.userRepository.findById(id);
    if(!response) throw new NotFoundException("User not found");
    return response;
  }

  async findByEmail(email: string){
    const response = await this.userRepository.findByEmail(email);
    if(!response) throw new NotFoundException("Email not registered in the system");
    return response;
  }
}
