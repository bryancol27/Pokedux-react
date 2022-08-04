import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

//reducer
import rootReducer from './reducers/rootReducer';

//import redux provider
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore} from 'redux';

//middleware
import { logger } from './middlewares';

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, )
);

const store = createStore(
    rootReducer, 
    composedEnhancers
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

