import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { SEARCH_API_KEY } from "../../utils/variables";
import {
  AutoCompleteSearchResult,
  SearchResult,
  SearchState,
} from "../../utils/types";

const initialState: SearchState = {
  results: null,
  autoCompleteResults: [],
  autoCompleteStatus: "idle",
  status: "idle",
  error: null,
};

export const fetchSearchResults = createAsyncThunk<
  SearchResult,
  string,
  { rejectValue: string }
>("search/fetchResults", async (query, thunkAPI) => {
  if (!query.trim()) {
    return thunkAPI.rejectWithValue("Search query cannot be empty.");
  }
  try {
    const response = await fetch(
      `https://www.searchapi.io/api/v1/search?api_key=${SEARCH_API_KEY}&gws-wiz&engine=google&q=${query}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch search results.");
    }
    const data: SearchResult = await response.json();
    return data;
  } catch (error: any) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Failed to fetch search results.";
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const fecthAutoCompleteSearchResults = createAsyncThunk<
  AutoCompleteSearchResult,
  string,
  { rejectValue: string }
>("search/fetchAutoCompleteResults", async (query, thunkAPI) => {
  if (!query.trim()) {
    return thunkAPI.rejectWithValue("Search query cannot be empty.");
  }
  try {
    const response = await fetch(
      `https://www.searchapi.io/api/v1/search?api_key=${SEARCH_API_KEY}&client=gws-wiz&engine=google_autocomplete&q=${query}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch search results.");
    }
    const data: AutoCompleteSearchResult = await response.json();
    return data;
  } catch (error: any) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Failed to fetch search results.";
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearchResults: (state) => {
      state.results = null;
      state.status = "idle";
      state.error = null;
      state.autoCompleteResults = [];
      state.autoCompleteStatus = "idle";
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchSearchResults.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        fetchSearchResults.fulfilled,
        (state, action: PayloadAction<SearchResult>) => {
          state.status = "succeeded";
          state.results = action.payload;

          state.error = null;
        }
      )
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = "failed";
        state.results = null;

        state.error =
          action.payload ?? action.error.message ?? "Unknown error occurred";
      })
      .addCase(fecthAutoCompleteSearchResults.pending, (state) => {
        state.autoCompleteStatus = "loading";
        state.autoCompleteResults = [];
        state.error = null;
      })
      .addCase(
        fecthAutoCompleteSearchResults.fulfilled,
        (state, action: PayloadAction<AutoCompleteSearchResult>) => {
          state.autoCompleteStatus = "succeeded";
          state.autoCompleteResults = action.payload.suggestions.splice(0, 5);
          state.error = null;
        }
      )
      .addCase(fecthAutoCompleteSearchResults.rejected, (state, action) => {
        state.autoCompleteStatus = "failed";
        state.autoCompleteResults = [];

        state.error =
          action.payload ?? action.error.message ?? "Unknown error occurred";
      });
  },
});

export const { clearSearchResults } = searchSlice.actions;

export const search = (state: RootState): SearchState => state.search;

export default searchSlice.reducer;
