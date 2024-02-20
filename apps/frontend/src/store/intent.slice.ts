import { Intent } from '@core/lib';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import type { AppThunk } from './store';

const initialState: Record<string, Intent> = {};

export const intentSlice = createSlice({
  name: 'intent',
  initialState,
  reducers: {
    replace: (_, action: PayloadAction<Record<string, Intent>>) => {
      return action.payload;
    },
    updateIntent: (state, action: PayloadAction<Partial<Intent> & Pick<Intent, 'id' | 'assistantID'>>) => {
      Object.assign(state[action.payload.id + action.payload.assistantID], action.payload);
    },
  },
  selectors: {
    allIntents: (state) => Object.values(state),
    getIntentById: (state) => (intentID: string, assistantID: string) => state[intentID + assistantID],
  },
});

export const { replace } = intentSlice.actions;

export const { allIntents, getIntentById } = intentSlice.selectors;

export const fetchIntents = (): AppThunk => async (dispatch) => {
  const result = await axios.get<Intent[]>('/intents');
  dispatch(replace(Object.fromEntries(result.data.map((intent) => [intent.id + intent.assistantID, intent]))));
};

export const updateIntent =
  (intent: Partial<Intent> & Pick<Intent, 'id' | 'assistantID'>): AppThunk =>
  async (dispatch) => {
    await axios.patch<Intent[]>(`/intents/one`, intent);
    dispatch(intentSlice.actions.updateIntent(intent));
  };
