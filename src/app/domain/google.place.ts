// Main response interface
export interface PlacesAutocompleteResponse {
    predictions: Prediction[];
    status: string;
}

// Prediction interface, representing each location suggestion
export interface Prediction {
    description: string;
    matched_substrings: MatchedSubstring[];
    place_id: string;
    reference: string;
    structured_formatting: StructuredFormatting;
    terms: Term[];
    types: string[];
}

// Interface for matched_substrings array elements
export interface MatchedSubstring {
    length: number;
    offset: number;
}

// Interface for structured_formatting details
export interface StructuredFormatting {
    main_text: string;
    main_text_matched_substrings: MatchedSubstring[];
    secondary_text: string;
}

// Interface for terms array elements, providing structured parts of the address
export interface Term {
    offset: number;
    value: string;
}
