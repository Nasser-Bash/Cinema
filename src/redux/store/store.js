import { createStore , applyMiddleware } from "redux";
import { moviesReducer } from "../reducer/MoviesReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../reducer/AllReducer";
import thunk from "redux-thunk";
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
