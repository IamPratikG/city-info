import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { fetchCities } from "../store/citiesSlice";
import SearchBox from "../components/SearchBox";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <div className="home">
      <h2 className="welcome-text">
        Ready to get insights for your travels? Let's get started!
      </h2>
      <SearchBox />
    </div>
  );
};

export default Home;
