import { Controller, Get, Query } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  findAll(@Query('search') search?: string) {
    if (search) {
      return this.citiesService.search(search);
    }
    return this.citiesService.findAll();
  }
}
