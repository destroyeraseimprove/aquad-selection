import React from "react";
import { createUseStyles } from "react-jss";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles";
import { addPlayer } from "@reducers";
import PlayerCard from "@components/PlayerCard";
import { ADD, SUBSTITUTIONS } from "@constants";

export default () => {
  const classes = createUseStyles(styles)();

  const { players, pending } = useSelector((state) => state.squad);

  const substitutions = players.filter(({ playerRole }) => !playerRole);

  return (
    <>
      <h3 className={classes.header}>{SUBSTITUTIONS}</h3>
      <div className={classes.substitutionsPanel}>
        {substitutions.map((player, index) => (
          <PlayerCard
            {...{
              player,
              key: index,
              pending,
              moveAction: {
                label: ADD,
                callback: addPlayer,
              },
            }}
          />
        ))}
      </div>
    </>
  );
};
