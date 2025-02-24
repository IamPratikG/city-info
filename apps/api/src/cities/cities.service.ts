import { Injectable, NotFoundException } from '@nestjs/common';
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

  findOne(name: string): City {
    const city = this.cities.find(
      (city) => city.name.toLowerCase() === name.toLowerCase(),
    );
    if (!city) {
      throw new NotFoundException(`City with name ${name} not found`);
    }
    return city;
  }

  update(name: string, updatedCity: Partial<City>): City {
    const cityIndex = this.cities.findIndex(
      (city) => city.name.toLowerCase() === name.toLowerCase(),
    );
    if (cityIndex === -1) {
      throw new NotFoundException(`City with name ${name} not found`);
    }
    this.cities[cityIndex] = { ...this.cities[cityIndex], ...updatedCity };
    return this.cities[cityIndex];
  }

  remove(name: string): void {
    const cityIndex = this.cities.findIndex(
      (city) => city.name.toLowerCase() === name.toLowerCase(),
    );
    if (cityIndex === -1) {
      throw new NotFoundException(`City with name ${name} not found`);
    }
    this.cities.splice(cityIndex, 1);
  }
}
