import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import CityList from "./CityList";
import * as reactRedux from "react-redux";
import { RootState } from "../../store/store";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("CityList Page", () => {
  const mockCities = [
    { name: "New York", country: "USA", population: "8336817" },
    { name: "Tokyo", country: "Japan", population: "13929286" },
    { name: "London", country: "UK", population: "8982000" },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders city list page", () => {
    jest
      .spyOn(reactRedux, "useSelector")
      .mockImplementation((selector: (state: RootState) => unknown) =>
        selector({
          cities: {
            cities: mockCities,
            status: "succeeded",
            error: null,
          },
        } as RootState)
      );
    render(
      <BrowserRouter>
        <CityList />
      </BrowserRouter>
    );
    expect(screen.getByText(/New York/i)).toBeInTheDocument();
  });

  it("displays list of cities", () => {
    jest
      .spyOn(reactRedux, "useSelector")
      .mockImplementation((selector: (state: RootState) => unknown) =>
        selector({
          cities: {
            cities: mockCities,
            status: "succeeded",
            error: null,
          },
        } as RootState)
      );
    render(
      <BrowserRouter>
        <CityList />
      </BrowserRouter>
    );
    mockCities.forEach((city) => {
      expect(screen.getByText(city.name)).toBeInTheDocument();
      expect(screen.getByText(`Country: ${city.country}`)).toBeInTheDocument();
    });
  });

  it("displays error state", () => {
    jest
      .spyOn(reactRedux, "useSelector")
      .mockImplementation((selector: (state: RootState) => unknown) =>
        selector({
          cities: {
            cities: [],
            status: "failed",
            error: "Failed to fetch cities",
            searchResults: [],
          },
        } as RootState)
      );

    render(
      <BrowserRouter>
        <CityList />
      </BrowserRouter>
    );
    expect(
      screen.getByText(/Error: Failed to fetch cities/i)
    ).toBeInTheDocument();
  });

  it("displays message when no cities are found", () => {
    jest
      .spyOn(reactRedux, "useSelector")
      .mockImplementation((selector: (state: RootState) => unknown) =>
        selector({
          cities: {
            cities: [],
            status: "succeeded",
            error: null,
            searchResults: [],
          },
        } as RootState)
      );

    render(
      <BrowserRouter>
        <CityList />
      </BrowserRouter>
    );
    expect(screen.getByText(/No cities found./i)).toBeInTheDocument();
  });

  it("displays loading state", () => {
    jest
      .spyOn(reactRedux, "useSelector")
      .mockImplementation((selector: (state: RootState) => unknown) =>
        selector({
          cities: {
            cities: [],
            status: "loading",
            error: null,
            searchResults: [],
          },
        } as RootState)
      );
    render(
      <BrowserRouter>
        <CityList />
      </BrowserRouter>
    );
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
