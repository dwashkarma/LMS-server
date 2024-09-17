import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JWTStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    // JwtModule.register({
    //   secret: process.env.SECRET_KEY,
    //   signOptions: { expiresIn: process.env.JWT_EXPIRES },
    // }),
    JwtModule.registerAsync({
      inject: [ConfigService], // to use process.env file
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: configService.get<string | number>('JWT_EXPIRES'),
          },
        };
      },
    }),
  ],
  providers: [JWTStrategy, AuthService],
  exports: [JwtModule, PassportModule],
})
export class AuthModule {}
