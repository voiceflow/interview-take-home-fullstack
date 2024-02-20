/* eslint-disable no-param-reassign */
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
    updateUtterance: (state, action: PayloadAction<Partial<Utterance> & Pick<Utterance, 'id' | 'assistantID' | 'intentID'>>) => {
      const index = state.findIndex((utterance) => utterance.id === action.payload.id && utterance.assistantID === action.payload.assistantID);
      state[index] = { ...state[index], ...action.payload };
    },
    deleteUtterance: (state, action: PayloadAction<Pick<Utterance, 'id' | 'assistantID'>>) => {
      return state.filter((utterance) => utterance.id !== action.payload.id || utterance.assistantID !== action.payload.assistantID);
    },
    addUtterance: (state, action: PayloadAction<Utterance>) => {
      state.push(action.payload);
    },
  },
  selectors: {
    allUtterances: (state) => state,
    utteranceByIntentID: (state) => (intentID: string, assistantID: string) =>
      state.filter((utterance) => utterance.intentID === intentID && utterance.assistantID === assistantID),
  },
});

export const { replace } = utteranceSlice.actions;

export const { allUtterances, utteranceByIntentID } = utteranceSlice.selectors;

export const fetchUtterances = (): AppThunk => async (dispatch) => {
  const result = await axios.get<Utterance[]>('/utterances');
  dispatch(replace(result.data));
};

export const updateUtterance =
  (utterance: Partial<Utterance> & Pick<Utterance, 'id' | 'assistantID' | 'intentID'>): AppThunk =>
  async (dispatch) => {
    await axios.patch<Utterance[]>(`/utterances/one`, utterance);
    dispatch(utteranceSlice.actions.updateUtterance(utterance));
  };

export const deleteUtterance =
  (utterance: Pick<Utterance, 'id' | 'assistantID'>): AppThunk =>
  async (dispatch) => {
    await axios.delete<Utterance[]>(`/utterances/one`, { data: utterance });
    dispatch(utteranceSlice.actions.deleteUtterance(utterance));
  };

export const addUtterance =
  (utterance: Pick<Utterance, 'text' | 'assistantID' | 'intentID'>): AppThunk =>
  async (dispatch) => {
    const result = await axios.post<Utterance>(`/utterances`, utterance);
    dispatch(utteranceSlice.actions.addUtterance(result.data));
  };
