import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { searchCities } from "../../store/citiesSlice";
import { RootState } from "../../store/store";
import "./SearchBox.css";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const searchResults = useAppSelector(
    (state: RootState) => state.cities.searchResults
  );
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchTerm) {
      dispatch(searchCities(searchTerm));
      setIsResultsVisible(true);
    } else {
      setIsResultsVisible(false);
    }
  }, [searchTerm, dispatch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsResultsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleResultClick = (cityName: string) => {
    navigate(`/city/${cityName}`);
    setIsResultsVisible(false);
    setSearchTerm("");
  };

  return (
    <div className="search-box" ref={searchRef}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search cities..."
      />
      <span className="search-icon">🔍</span>
      {isResultsVisible && searchResults.length > 0 && (
        <ul className="search-results">
          {searchResults.map((city) => (
            <li key={city.name} onClick={() => handleResultClick(city.name)}>
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
