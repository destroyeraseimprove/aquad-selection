import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { createUseStyles } from "react-jss";
import styles from "./styles";
import SquadSlot from "@components/SquadSlot";
import { PENDING, CURRENT, DATA, SQUAD } from "@constants";

export default () => {
  const fotmationData = useSelector((state) => state.formation[CURRENT][DATA]);

  const pending = useSelector((state) => state.squad[PENDING]);

  const classes = createUseStyles(styles)();

  return (
    <>
      <h3 className={classes.header}>{SQUAD}</h3>
      <div className={classes.mainSquadPanel}>
        <div className={classes.formationHolder}>
          {Object.keys(fotmationData).map((role, index) => (
            <SquadSlot
              {...{
                key: index,
                role,
                pending,
                roleInfo: fotmationData[role],
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};
