/*
 * @Description:
 * @Autor: Diviner
 * @Date: 2021-04-12 15:03:29
 * @LastEditors: Diviner
 * @LastEditTime: 2021-04-12 17:19:44
 */
import { Controller, Get, Logger, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  private readonly logger = new Logger('CatsController');

  @Get(':id')
  findOne(): string {
    return 'this action return one cat !';
  }

  @Get()
  findAll(@Req() request: Request): string {
    this.logger.log(request.hostname);
    return 'this action return all cats !';
  }

  @Post('create')
  createOne(): string {
    return 'this action will create one cat !';
  }
}
