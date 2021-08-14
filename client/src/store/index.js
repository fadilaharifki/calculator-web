import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import count from "./reducers/count";

const reducers = combineReducers({
    data: count,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)),
);

export default store;
