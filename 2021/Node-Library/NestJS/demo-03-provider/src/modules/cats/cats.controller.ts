/*
 * @Description:
 * @Autor: Diviner
 * @Date: 2021-04-12 15:03:29
 * @LastEditors: Diviner
 * @LastEditTime: 2021-04-13 23:36:55
 */
import { Body, Controller, Get, Logger, Post, Req } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {
  private readonly logger = new Logger('CatsController');
  constructor(private readonly catsService: CatsService) {}

  @Get(':id')
  findOne(): string {
    return 'this action return one cat !';
  }

  @Get()
  findAll(): Cat[] {
    // this.logger.log(request.hostname);
    // return 'this action return all cats !';
    return this.catsService.getCats();
  }

  @Post('create')
  createOne(@Body() cat: Cat): Cat {
    // return 'this action will create one cat !';
    return this.catsService.createCat(cat);
  }
}
