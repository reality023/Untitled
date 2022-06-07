import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import post from './modules/post';
import account from "./modules/account";

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ post, account });
const store = createStore(rootReducer, enhancer);

export default store;
