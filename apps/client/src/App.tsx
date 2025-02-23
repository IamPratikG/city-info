import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cityData, setCityData] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then((data) => {
        setCityData(data);
      });
  }, []);

  return (
    <>
      <div>
        <h1>{cityData}</h1>
      </div>
    </>
  );
}

export default App;
