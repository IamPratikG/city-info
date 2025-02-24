import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface City {
  name: string;
  name_native: string;
  country: string;
  continent: string;
  latitude: string;
  longitude: string;
  population: string;
  founded: string;
  landmarks: string[];
}

interface CitiesState {
  cities: City[];
  searchResults: City[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CitiesState = {
  cities: [],
  searchResults: [],
  status: "idle",
  error: null,
};

export const fetchCities = createAsyncThunk("cities/fetchCities", async () => {
  const response = await fetch("/api/cities");
  return response.json();
});

export const searchCities = createAsyncThunk(
  "cities/searchCities",
  async (searchTerm: string) => {
    const response = await fetch(`/api/cities?search=${searchTerm}`);
    return response.json();
  }
);

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchCities.fulfilled,
        (state, action: PayloadAction<City[]>) => {
          state.status = "succeeded";
          state.cities = action.payload;
        }
      )
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(
        searchCities.fulfilled,
        (state, action: PayloadAction<City[]>) => {
          state.searchResults = action.payload;
        }
      );
  },
});

export default citiesSlice.reducer;
