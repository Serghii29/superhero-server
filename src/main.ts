import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 3333;

  const app = await NestFactory.create(AppModule);

  // eslint-disable-next-line no-console
  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
start();
