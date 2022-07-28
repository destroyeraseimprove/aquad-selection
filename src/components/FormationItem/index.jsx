import React from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import styles from "./styles";
import { changeFormation } from "@reducers";

export default ({ label, id, isCurrent }) => {
  const classes = createUseStyles(styles)();
  const dispatch = useDispatch();

  return (
    <p
      onClick={() => dispatch(changeFormation(id))}
      className={classNames(isCurrent && classes.current, classes.label)}
    >
      {label}
    </p>
  );
};
