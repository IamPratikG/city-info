import {
  APIProvider,
  Map as GoogleMap,
  Marker,
} from "@vis.gl/react-google-maps";
import { useAppSelector } from "../../store/hooks";
import "./Map.css";

const MapComponent = () => {
  const cities = useAppSelector((state) => state.cities.cities);
  const status = useAppSelector((state) => state.cities.status);

  console.log("Map reloaded!!!!");

  return (
    <div className="map-container">
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          defaultCenter={{ lat: 0, lng: 0 }}
          defaultZoom={2.5}
          gestureHandling={"greedy"}
          disableDefaultUI={false}
        >
          {status === "succeeded" &&
            cities.map((city) => (
              <Marker
                key={city.name}
                position={{
                  lat: parseFloat(city.latitude),
                  lng: parseFloat(city.longitude),
                }}
                title={city.name}
              />
            ))}
        </GoogleMap>
      </APIProvider>
    </div>
  );
};

export default MapComponent;
