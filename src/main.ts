import { NestFactory } from '@nestjs/core';
// import { LoggerMiddleware } from './middlewares/logger.middleware';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { 
    cors: true,
    // logger: ['debug'],
   });
  //  app.use(LoggerMiddleware);
  await app.listen(process.env.PORT);
  console.log('PORT: ', process.env.PORT);
}
bootstrap();
