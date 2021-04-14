/*
 * @Description:
 * @Autor: Diviner
 * @Date: 2021-04-13 21:00:22
 * @LastEditors: Diviner
 * @LastEditTime: 2021-04-14 09:48:01
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './modules/cats/cats.controller';
import { CatsService } from './modules/cats/cats.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
