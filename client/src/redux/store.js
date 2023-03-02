import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension"; // esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS 

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;// esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS 

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);// esta línea es para poder hacer peticiones a un server

export default store;