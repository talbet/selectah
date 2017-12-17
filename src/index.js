import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import configureStore from './redux/configureStore';

const { store } = configureStore();

const load = () =>
  render(
    <AppContainer>
      <Provider store={store} key="provider">
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );

load();
