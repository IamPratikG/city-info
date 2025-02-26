import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import "./CityDetails.css";

const CityDetails = () => {
  const { cityName } = useParams<{ cityName: string }>();
  const city = useAppSelector((state) =>
    state.cities.cities.find(
      (c) => c.name.toLowerCase() === cityName?.toLowerCase()
    )
  );

  if (!city) {
    return <div className="city-details-error">City not found</div>;
  }

  return (
    <div className="city-details-container">
      <div className="city-title">
        <h1>{city.name}</h1>
        <p className="native-name">{city.name_native}</p>
      </div>

      <div className="city-content">
        <section className="city-main-info">
          <div className="info-card">
            <h2>Overview</h2>
            <p>
              <strong>Country:</strong> {city.country}
            </p>
            <p>
              <strong>Continent:</strong> {city.continent}
            </p>
            <p>
              <strong>Population:</strong> {city.population}
            </p>
            <p>
              <strong>Founded:</strong> {city.founded}
            </p>
          </div>
          <div className="info-card">
            <h2>Geography</h2>
            <p>
              <strong>Latitude:</strong> {city.latitude}
            </p>
            <p>
              <strong>Longitude:</strong> {city.longitude}
            </p>
          </div>
        </section>

        <section className="city-landmarks">
          <h2>Landmarks</h2>
          <ul>
            {city.landmarks.map((landmark, index) => (
              <li key={index}>{landmark}</li>
            ))}
          </ul>
        </section>

        <section className="city-description">
          <h2>About {city.name}</h2>
          <p>Detailed description of {city.name} will be added here.</p>
        </section>
      </div>
    </div>
  );
};

export default CityDetails;
