import { InfoWindow } from "@vis.gl/react-google-maps";
import { useNavigate } from "react-router-dom";
import CityCard from "../CityCard/CityCard";
import { City } from "../../store/citiesSlice";
import "./MarkerPopup.css";

interface MarkerPopupProps {
  city: City;
  position: google.maps.LatLngLiteral;
  onClose: () => void;
}

const MarkerPopup: React.FC<MarkerPopupProps> = ({
  city,
  position,
  onClose,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/city/${city.name}`);
  };

  return (
    <InfoWindow
      position={position}
      onCloseClick={onClose}
      maxWidth={300}
      minWidth={200}
      pixelOffset={[0, -30]}
    >
      <div
        className="marker-popup-content"
        style={{ backgroundColor: "var(--bg-color)" }}
      >
        <CityCard city={city} />
        <button className="view-details-button" onClick={handleNavigate}>
          View Details
        </button>
      </div>
    </InfoWindow>
  );
};

export default MarkerPopup;
