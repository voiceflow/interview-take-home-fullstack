import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';

async function bootstrap() {
  /**
   * The current config will start the NestJS application with
   * express adapter
   */
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();

  await app.listen(4000);
}
bootstrap();
