import { useState } from "react";
import {
  APIProvider,
  Map as GoogleMap,
  Marker,
} from "@vis.gl/react-google-maps";
import { useAppSelector } from "../../store/hooks";
import MarkerPopup from "../MarkerPopup/MarkerPopup";
import { City } from "../../store/citiesSlice";
import "./Map.css";

const MapComponent = () => {
  const cities = useAppSelector((state) => state.cities.cities);
  const status = useAppSelector((state) => state.cities.status);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const handleMarkerClick = (city: City) => {
    setSelectedCity(city);
  };

  const handlePopupClose = () => {
    setSelectedCity(null);
  };

  const mapBounds = {
    north: 85,
    south: -85,
    west: -180,
    east: 180,
  };

  return (
    <div className="map-container">
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          defaultCenter={{ lat: 0, lng: 0 }}
          defaultZoom={2.5}
          minZoom={2} // Set minimum zoom level
          gestureHandling={"greedy"}
          disableDefaultUI={false}
          restriction={{
            latLngBounds: mapBounds,
            strictBounds: true,
          }}
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
                onClick={() => handleMarkerClick(city)}
              />
            ))}
          {selectedCity && (
            <MarkerPopup
              city={selectedCity}
              position={{
                lat: parseFloat(selectedCity.latitude),
                lng: parseFloat(selectedCity.longitude),
              }}
              onClose={handlePopupClose}
            />
          )}
        </GoogleMap>
      </APIProvider>
    </div>
  );
};

export default MapComponent;
