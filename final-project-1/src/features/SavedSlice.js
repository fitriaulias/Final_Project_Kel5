<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	articles: [],
};

export const savedSlice = createSlice({
	name: 'saved',
	initialState,
	reducers: {
		savedNews: (state, action) => {
			const findNews = state.articles.find(news => news.title === action.payload.title);
			if (findNews) {
				state.articles = state.articles.filter(news => news.title !== action.payload.title);
			} else {
				state.articles = [action.payload, ...state.articles];
			}
		},
	},
});

export const { savedNews } = savedSlice.actions;

export default savedSlice.reducer;
=======
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	articles: [],
};

export const savedSlice = createSlice({
	name: 'saved',
	initialState,
	reducers: {
		savedNews: (state, action) => {
			const findNews = state.articles.find(news => news.title === action.payload.title);
			if (findNews) {
				state.articles = state.articles.filter(news => news.title !== action.payload.title);
			} else {
				state.articles = [action.payload, ...state.articles];
			}
		},
	},
});

export const { savedNews } = savedSlice.actions;

export default savedSlice.reducer;
>>>>>>> 6d6a9f6616ad43e3734dca9d2bc0077ab3b62a91
