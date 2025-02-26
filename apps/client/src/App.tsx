import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import CityList from "./pages/CityList/CityList";
import CityDetails from "./pages/CityDetails/CityDetails";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<CityList />} />
        <Route path="/city/:cityName" element={<CityDetails />} />
      </Routes>
    </div>
  );
}

export default App;
