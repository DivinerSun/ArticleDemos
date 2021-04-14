/*
 * @Description:
 * @Autor: Diviner
 * @Date: 2021-04-14 19:41:28
 * @LastEditors: Diviner
 * @LastEditTime: 2021-04-14 20:56:12
 */

import { Global, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  imports: [],
  exports: [CatsService],
})
export class CatsModule {}
