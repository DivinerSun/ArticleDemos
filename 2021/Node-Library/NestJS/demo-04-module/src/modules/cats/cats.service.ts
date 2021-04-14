/*
 * @Description:
 * @Autor: Diviner
 * @Date: 2021-04-13 23:23:45
 * @LastEditors: Diviner
 * @LastEditTime: 2021-04-13 23:32:28
 */

import { Injectable } from '@nestjs/common';
import { Cat } from './interface/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  createCat(cat: Cat): Cat {
    this.cats.push(cat);
    return cat;
  }

  getCats(): Cat[] {
    return this.cats;
  }
}
