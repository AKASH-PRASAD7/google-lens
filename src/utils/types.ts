export interface SearchResult {
  search_metadata: {
    id: string;
    status: string;
    html_url: string;
  };
}

export type suggestionsResult = {
  value: string;
};

export interface AutoCompleteSearchResult {
  suggestions: Array<suggestionsResult>;
}

export interface SearchState {
  results: SearchResult | null;
  autoCompleteResults: suggestionsResult[];
  autoCompleteStatus: "idle" | "loading" | "succeeded" | "failed";
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
