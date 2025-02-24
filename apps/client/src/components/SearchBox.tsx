import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { searchCities } from "../store/citiesSlice";
import { useAppDispatch } from "../store/hooks";
import { RootState } from "../store/store";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const searchResults = useSelector(
    (state: RootState) => state.cities.searchResults
  );

  useEffect(() => {
    if (searchTerm) {
      dispatch(searchCities(searchTerm));
    }
  }, [searchTerm, dispatch]);

  return (
    <div className="search-box">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search cities..."
      />
      <span className="search-icon">🔍</span>
      {searchResults.length > 0 && (
        <ul className="search-results">
          {searchResults.map((city) => (
            <li key={city.name}>
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
