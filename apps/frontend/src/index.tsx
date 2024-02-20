import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'store/store';

import HomePage from './pages/Home';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HomePage />
    </Provider>
  </React.StrictMode>
);
