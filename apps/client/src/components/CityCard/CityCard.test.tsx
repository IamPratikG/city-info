import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import CityCard from "./CityCard";

const sampleCity = {
  name: "Madrid",
  name_native: "Madrid",
  country: "Spain",
  continent: "Europe",
  latitude: "40.416775",
  longitude: "-3.703790",
  population: "3223000",
  founded: "1083",
  landmarks: ["Royal Palace", "Plaza Mayor", "Plaza de Cibeles"],
};

describe("CityCard Component", () => {
  test("renders city name", () => {
    render(
      <BrowserRouter>
        <CityCard city={sampleCity} />
      </BrowserRouter>
    );
    expect(
      screen.getByRole("heading", { name: /Madrid/i })
    ).toBeInTheDocument();
  });

  test("renders city country", () => {
    render(
      <BrowserRouter>
        <CityCard city={sampleCity} />
      </BrowserRouter>
    );
    expect(screen.getByText(/Spain/i)).toBeInTheDocument();
  });
});
