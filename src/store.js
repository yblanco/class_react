import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export function store() {
  return createStore(
    reducers,
    applyMiddleware(thunk),
  );
}

export default store();
