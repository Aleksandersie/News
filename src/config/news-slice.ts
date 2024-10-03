import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type News = {
  id: string;
  title: string;
  description: string;
};

type InitialState = {
  newsList: News[];
};

const initialState: InitialState = {
  newsList: [],
};

export const newsSlice = createSlice({
  name: "news-slice",
  initialState,
  reducers: {
    setNewsList: (state, action: PayloadAction<News[]>) => {
      state.newsList = action.payload;
    },
  },
});

export const { setNewsList } = newsSlice.actions;
