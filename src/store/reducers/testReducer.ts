import { createSlice } from '@reduxjs/toolkit';

export const testSlice = createSlice({
  name: 'test',
  initialState: {
    userName: '',
    answers: [] as string[],
  },
  reducers: {
    setUsername: (state: {userName: string}, action: {payload: string}) => {
      state.userName = action.payload;
    },
    addAnswer: (state: {answers: string[]}, action: {payload: string}) => {
      state.answers = [...state.answers, action.payload];
    },
  },
});

export const {
  setUsername, addAnswer,
} = testSlice.actions;

export default testSlice.reducer;
