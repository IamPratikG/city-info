import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CitiesService } from './cities.service';
import { City } from './city.interface';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  create(@Body() city: City) {
    return this.citiesService.create(city);
  }

  @Get()
  findAll() {
    return this.citiesService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.citiesService.findOne(name);
  }

  @Patch(':name')
  update(@Param('name') name: string, @Body() updatedCity: Partial<City>) {
    return this.citiesService.update(name, updatedCity);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.citiesService.remove(name);
  }
}
