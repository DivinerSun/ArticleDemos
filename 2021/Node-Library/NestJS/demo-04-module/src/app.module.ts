/*
 * @Description:
 * @Autor: Diviner
 * @Date: 2021-04-13 21:00:22
 * @LastEditors: Diviner
 * @LastEditTime: 2021-04-14 19:43:27
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './modules/cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
