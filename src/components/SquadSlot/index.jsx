import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createUseStyles } from "react-jss";
import classNames from "classnames";
import styles from "./styles";
import { removePlayer, completeAdding } from "@reducers";
import PlayerCard from "@components/PlayerCard";
import { REMOVE, ADD_HERE } from "@constants";

export default ({ role, roleInfo, pending }) => {
  const classes = createUseStyles(styles)(roleInfo);

  const player = useSelector(
    state =>
      state.squad.players.filter((player) => player.playerRole === role)[0]
  );

  const [addHere, setAddHere] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    pending && !player && setAddHere(true);
    !pending && addHere && setAddHere(false);
  }, [pending, player]);

  const onAddHereClick = () => dispatch(completeAdding(role));

  return (
    <div className={classNames(classes.squadSlot, classes.role)}>
      {player && (
        <PlayerCard
          {...{
            player,
            pending,
            moveAction: {
              label: REMOVE,
              callback: removePlayer,
            },
          }}
        />
      )}

      {addHere && (
        <div className={classes.addHerePanel} onClick={onAddHereClick}>
          {ADD_HERE}
        </div>
      )}
    </div>
  );
};
