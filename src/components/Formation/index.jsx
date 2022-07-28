import React from "react";
import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";
import styles from "./styles";
import FormationItem from "@components/FormationItem";
import { FORMATION, CURRENT, OPTIONS } from "@constants";

export default () => {
  const classes = createUseStyles(styles)();

  const { 
    [CURRENT]: currentFormation, 
    [OPTIONS]: formationOptions } = useSelector((state) => state.formation);

  return (
    <>
      <h3 className={classes.header}>{FORMATION}</h3>
      <div className={classes.formationPanel}>
        {formationOptions.map(({ label, id }, index) => (
          <FormationItem
            {...{
              label,
              id,
              key: index,
              isCurrent: id === currentFormation.id,
            }}
          />
        ))}
      </div>
    </>
  );
};
