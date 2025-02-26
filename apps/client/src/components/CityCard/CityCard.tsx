import { useNavigate } from "react-router-dom";
import { City } from "../../store/citiesSlice";
import "./CityCard.css";

interface CityCardProps {
  city: City;
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/city/${city.name}`);
  };

  return (
    <div className="city-card" onClick={handleClick}>
      <h2>{city.name}</h2>
      <p>Native Name: {city.name_native}</p>
      <p>Country: {city.country}</p>
      <p>Continent: {city.continent}</p>
      <p>Population: {city.population}</p>
    </div>
  );
};

export default CityCard;
