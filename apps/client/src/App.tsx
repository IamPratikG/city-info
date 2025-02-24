import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CityList from "./pages/CityList";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<CityList />} />
      </Routes>
    </div>
  );
}

export default App;
