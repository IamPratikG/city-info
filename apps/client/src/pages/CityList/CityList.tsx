import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CityCard from "../../components/CityCard/CityCard";
import "./CityList.css";

const CityList = () => {
  const cities = useSelector((state: RootState) => state.cities.cities);

  return (
    <div className="city-list">
      <div className="city-grid">
        {cities.map((city) => (
          <CityCard key={city.name} city={city} />
        ))}
      </div>
    </div>
  );
};

export default CityList;
