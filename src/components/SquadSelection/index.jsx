import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "@reducers/root";
import { createUseStyles } from "react-jss";
import styles from "./styles";
import MainSquad from "@components/MainSquad";
import Substitutions from "@components/Substitutions";
import Formation from "@components/Formation";
import {localStorageMiddleware, reHydrateStore} from './localStorageState'

export default () => {
  const classes = createUseStyles(styles)();

  const store = createStore(
    rootReducer,
    reHydrateStore(),// <-- FOCUS HERE
    applyMiddleware(
        localStorageMiddleware,// <-- FOCUS HERE 
    )
)

  return (
    <Provider store={store}>
      <div className={classes.wrapper}>
        <Substitutions />
        <MainSquad />
        <Formation />
      </div>
    </Provider>
  );
};
