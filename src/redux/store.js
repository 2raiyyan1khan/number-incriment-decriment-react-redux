import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { reducer } from "./reducer";

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger))
);
