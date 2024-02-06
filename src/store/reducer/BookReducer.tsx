import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface BookState {
  thrillerBooks: {
    id: string;
    title: string;
    categories: string[];
    thumbnail: string;
    authors: string[];
    description: string;
  }[];
  AdventureBooks: {
    id: string;
    title: string;
    categories: string[];
    thumbnail: string;
    authors: string[];
    description: string;
  }[];
  loading: boolean;
  error: string | null;
}

const initialState: BookState = {
  thrillerBooks: [],
  AdventureBooks: [],
  loading: false,
  error: null,
};

interface ApiResponse {
  items: {
    id: string;
    volumeInfo: {
      title: string;
      categories: string[];
      imageLinks: {
        thumbnail: string;
      };
      authors: string[];
      description: string;
    };
  }[];
}

const apiKey = process.env.REACT_APP_API_KEY;

const bestApiUrl = `https://www.googleapis.com/books/v1/volumes?q=thriller&key=${apiKey}&maxResults=3`;

const booksApiUrl = `https://www.googleapis.com/books/v1/volumes?q=adventure&key=${apiKey}&maxResults=12`;

export const fetchThrillerBooks = createAsyncThunk(
  "bookThrillerOption/fetchBooksThrillerOption",
  async () => {
    try {
      const response = await axios.get(booksApiUrl);
      return response.data as ApiResponse;
    } catch (error) {
      console.error("Error fetching thriller books:", error);
      throw error;
    }
  }
);

export const fetchAdventureBooks = createAsyncThunk<ApiResponse>(
  "bookAdventureOption/fetchBooksAdventureOption",
  async () => {
    try {
      const response = await axios.get(bestApiUrl);
      return response.data;
    } catch (error) {
      console.error("Error fetching adventure books:", error);
      throw error;
    }
  }
);

export const BookReducer = createSlice({
  name: "bookStore",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchThrillerBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchThrillerBooks.fulfilled, (state, action) => {
        state.loading = false;
        if (state.AdventureBooks) {
          state.thrillerBooks = action.payload?.items?.map((item) => ({
            id: item.id,
            title: item.volumeInfo.title,
            categories: item.volumeInfo.categories,
            authors: item.volumeInfo.authors,
            description: item.volumeInfo.description,
            thumbnail: item.volumeInfo.imageLinks?.thumbnail,
          }));
        } else {
          state.thrillerBooks = [];
        }
      })
      .addCase(fetchThrillerBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error fetching thriller books. Please try again later.";
        console.error("Error fetching thriller books:", action.error);
      })
      .addCase(fetchAdventureBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdventureBooks.fulfilled, (state, action) => {
        state.loading = false;
        if(state.AdventureBooks){
          state.AdventureBooks = action.payload?.items?.map((item) => ({
            id: item.id,
            title: item.volumeInfo.title,
            categories: item.volumeInfo.categories,
            authors: item.volumeInfo.authors,
            description: item.volumeInfo.description,
            thumbnail: item.volumeInfo.imageLinks?.thumbnail,
          }));
        }else{
          state.AdventureBooks=[]
        }
      })
      .addCase(fetchAdventureBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error fetching adventure books. Please try again later.";
        console.error("Error fetching adventure books:", action.error);
      });
  },
});

export default BookReducer.reducer;
