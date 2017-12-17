import { createStore, compose } from 'redux';
import app from './reducers';

export default function configureStore(data) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(app, data, composeEnhancers());

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default);
    });
  }

  return {
    store,
  };
}
