import { createStore, combineReducers, compose, applyMiddleware} from 'redux';
import charactersReducer from './reducers/characters';
import thunk from 'redux-thunk';

let rootReducer = combineReducers({
  characters: charactersReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;

window.store = store;
