import { Injectable } from '@nestjs/common';
import { City } from './city.interface';
import * as citiesData from '../data/cities.json';

@Injectable()
export class CitiesService {
  private cities: City[] = citiesData.cities;

  create(city: City): City {
    this.cities.push(city);
    return city;
  }

  findAll(): City[] {
    return this.cities;
  }

  search(term: string): City[] {
    const lowercaseTerm = term.toLowerCase();
    return this.cities.filter(
      (city) =>
        city.name.toLowerCase().includes(lowercaseTerm) ||
        city.name_native.toLowerCase().includes(lowercaseTerm) ||
        city.country.toLowerCase().includes(lowercaseTerm) ||
        city.continent.toLowerCase().includes(lowercaseTerm),
    );
  }
}
