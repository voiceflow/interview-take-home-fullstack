import { Intent } from '@core/lib';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import type { AppThunk } from './store';

const initialState: Intent[] = [];

export const intentSlice = createSlice({
  name: 'intent',
  initialState,
  reducers: {
    replace: (_, action: PayloadAction<Intent[]>) => {
      return action.payload;
    },
  },
  selectors: {
    allIntents: (state) => state,
  },
});

export const { replace } = intentSlice.actions;

export const { allIntents } = intentSlice.selectors;

export const fetchIntents = (): AppThunk => async (dispatch) => {
  const result = await axios.get('http://localhost:4000/intents');
  dispatch(replace(result.data));
};
