import { render, screen } from "@testing-library/react";
import CityDetails from "./CityDetails";
import * as reactRouterDom from "react-router-dom";

jest.mock("../../store/hooks", () => ({
  useAppSelector: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

import { useAppSelector } from "../../store/hooks";

describe("CityDetails Page", () => {
  const mockCity = {
    name: "Test City",
    name_native: "Test City Native",
    country: "Test Country",
    continent: "Test Continent",
    latitude: "0",
    longitude: "0",
    population: "1000000",
    founded: "2000",
    landmarks: ["Landmark 1", "Landmark 2"],
  };

  beforeEach(() => {
    (reactRouterDom.useParams as jest.Mock).mockReturnValue({
      cityName: "Test City",
    });
    (useAppSelector as jest.Mock).mockReturnValue(mockCity);
  });

  it("renders city details page", () => {
    render(<CityDetails />);
    expect(
      screen.getByRole("heading", { name: "Test City" })
    ).toBeInTheDocument();
  });

  it("displays city information", () => {
    render(<CityDetails />);
    expect(screen.getByText("Test City Native")).toBeInTheDocument();
    expect(screen.getByText("Country:")).toBeInTheDocument();
    expect(screen.getByText("Test Country")).toBeInTheDocument();
    expect(screen.getByText("Continent:")).toBeInTheDocument();
    expect(screen.getByText("Test Continent")).toBeInTheDocument();
    expect(screen.getByText("Population:")).toBeInTheDocument();
    expect(screen.getByText("1000000")).toBeInTheDocument();
  });

  it("renders landmarks", () => {
    render(<CityDetails />);
    expect(screen.getByText("Landmark 1")).toBeInTheDocument();
    expect(screen.getByText("Landmark 2")).toBeInTheDocument();
  });
});
