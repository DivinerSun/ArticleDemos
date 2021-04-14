/*
 * @Description:
 * @Autor: Diviner
 * @Date: 2021-04-13 21:00:22
 * @LastEditors: Diviner
 * @LastEditTime: 2021-04-13 23:41:00
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8088);
}
bootstrap();
