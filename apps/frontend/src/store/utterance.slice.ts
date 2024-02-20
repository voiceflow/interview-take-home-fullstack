import { Utterance } from '@core/lib';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import type { AppThunk } from './store';

const initialState: Utterance[] = [];

export const utteranceSlice = createSlice({
  name: 'utterance',
  initialState,
  reducers: {
    replace: (_, action: PayloadAction<Utterance[]>) => {
      return action.payload;
    },
  },
  selectors: {
    allUtterances: (state) => state,
  },
});

export const { replace } = utteranceSlice.actions;

export const { allUtterances } = utteranceSlice.selectors;

export const fetchUtterances = (): AppThunk => async (dispatch) => {
  const result = await axios.get('http://localhost:4000/utterances');
  dispatch(replace(result.data));
};
