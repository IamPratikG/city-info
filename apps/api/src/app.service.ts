import { Injectable } from '@nestjs/common';
import * as CityData from './data/cities.json';

@Injectable()
export class AppService {
  getHello(): string {
    return JSON.stringify(CityData);
  }
}
