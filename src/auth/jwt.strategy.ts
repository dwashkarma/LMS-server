import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // Will reject tokens that have expired
      secretOrKey: process.env.SECRET_KEY,
    });
  }

  async validate(payload: any) {
    return { username: payload.name, sub: payload.id, email: payload.email };
  }
}
