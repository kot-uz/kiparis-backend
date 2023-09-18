import { Injectable } from '@nestjs/common';
import fetchPage from './utils/fetchPage';
import { jrnlstRuParser } from './utils/parsers/jrnlstRu.parser';

@Injectable()
export class AppService {
  getHello(): string {
    // fetchPage('https://www.dns-shop.ru/catalog/markdown/?p=1')
    // .then(res=>console.log(res))
    // .catch(error=>console.error(error))
    // // return response;
    jrnlstRuParser();
    return 'Hello Nest!';
  }
}
