import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3030);
};

void bootstrap().catch(
  (error) => new Error(`NestApp bootstrap error: ${error as string}`),
);
