import { createSlice } from '@reduxjs/toolkit';

export const testSlice = createSlice({
  name: 'test',
  initialState: {
    userName: '',
    testId: 0,
    answers: [] as string[],
  },
  reducers: {
    setUsername: (state: {userName: string}, action: {payload: string}) => {
      state.userName = action.payload;
    },
    setTest: (state: {testId: number}, action: {payload: number}) => {
      state.testId = action.payload;
    },
    addAnswer: (state: {answers: string[]}, action: {payload: string}) => {
      state.answers = [...state.answers, action.payload];
    },
  },
});

export const {
  setUsername, setTest, addAnswer,
} = testSlice.actions;

export default testSlice.reducer;
