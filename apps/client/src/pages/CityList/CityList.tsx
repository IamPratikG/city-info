import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CityCard from "../../components/CityCard/CityCard";
import "./CityList.css";

const CityList = () => {
  const cities = useSelector((state: RootState) => state.cities.cities);
  const status = useSelector((state: RootState) => state.cities.status);
  const error = useSelector((state: RootState) => state.cities.error);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  if (cities.length === 0) {
    return <div>No cities found.</div>;
  }

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
