import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import { App } from './components/App';

const store = createStore(reducers, applyMiddleware(thunk));


const root = ReactDOM.createRoot(document.querySelector('#root')!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);