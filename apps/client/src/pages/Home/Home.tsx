import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchCities } from "../../store/citiesSlice";
import SearchBox from "../../components/SearchBox/SearchBox";
import MapComponent from "../../components/Map/Map";
import "./Home.css";

const Home = () => {
  const dispatch = useAppDispatch();
  const { cities, status } = useAppSelector((state) => state.cities);

  useEffect(() => {
    if (status === "idle" && cities.length === 0) {
      dispatch(fetchCities());
    }
  }, [dispatch, status, cities.length]);

  return (
    <div className="home">
      <h2 className="welcome-text">
        Ready to get insights for your travels? Let's get started!
      </h2>
      <SearchBox />
      <MapComponent />
    </div>
  );
};

export default Home;
