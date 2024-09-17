import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://lms-client-phi.vercel.app', // Correct domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these methods
    credentials: true, // If you need to send cookies or authentication headers
  });
  await app.listen(5000);
}
bootstrap();
