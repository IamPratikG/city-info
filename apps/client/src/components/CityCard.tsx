import { City } from "../store/citiesSlice";

const CityCard = ({ city }: { city: City }) => {
  return (
    <div className="city-card">
      <h2>{city.name}</h2>
      <p>Native Name: {city.name_native}</p>
      <p>Country: {city.country}</p>
      <p>Continent: {city.continent}</p>
      <p>Population: {city.population}</p>
    </div>
  );
};

export default CityCard;
