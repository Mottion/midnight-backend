import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccessTokenDto } from './dto/access-token.dto';
import { UserService } from 'src/models/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}
  
  async signIn(email: string, password: string): Promise<AccessTokenDto> {
    const user = await this.usersService.findByEmail(email);
    if (user.password !== password) {
      throw new UnauthorizedException("Invalid credentials");
    }
    const payload = { id: user.id, name: user.name };

    return new AccessTokenDto(await this.jwtService.signAsync(payload));
  }
}