/*
 * @Description: 属性注入
 * @Autor: Diviner
 * @Date: 2021-04-14 10:44:53
 * @LastEditors: Diviner
 * @LastEditTime: 2021-04-14 10:46:56
 */

import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class HttpService<T> {
  @Inject('HTTP_OPTIONS')
  private readonly httpClient: T;
}
