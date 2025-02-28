import { CitiesService } from './cities.service';
import citiesData from '../data/cities.json';

describe('CitiesService', () => {
  let service: CitiesService;

  beforeEach(() => {
    service = new CitiesService();
  });

  it('should return all cities', () => {
    expect(service.findAll()).toEqual(citiesData.cities);
  });
});
