import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import middlewares from "./middlewares";

const appliedMiddlewares = applyMiddleware(...middlewares);

const finalMiddlewares =
  process.env.NODE_ENV === "productions"
    ? appliedMiddlewares
    : composeWithDevTools(appliedMiddlewares);

const store = createStore(reducers, finalMiddlewares);

export default store;
