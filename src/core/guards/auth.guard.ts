import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {

    const request = context.switchToHttp().getRequest();
    const {token} = request.headers;

    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

 

    if (!token) {
      throw new UnauthorizedException('Invalid token format');
    }

    try {
const payload = await this.jwtService.verifyAsync(token, { secret: 'ahmed' });
      request.user = payload; // نقدر نستخدمه في أي route
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }

    return true;
  }
}