import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createUseStyles } from "react-jss";
import { cancelAdding } from "@reducers";
import styles from "./styles";
import { CANCEL } from "@constants";

export default ({ player, pending, moveAction }) => {
  const classes = createUseStyles(styles)();
  const [overlay, setOverlay] = useState(false);
  const [overlayLabel, setOverlayLabel] = useState(moveAction.label);
  const [lock, setLock] = useState(false);

  const dispatch = useDispatch();

  const { playerId, playerNumber, playerDisplayedName } = player;

  useEffect(() => {
    !pending && setOverlay(false);
    setOverlayLabel(pending === playerId ? CANCEL : moveAction.label);
    setLock(!!pending);
  }, [pending]);

  const onMouseOver = () => !lock && setOverlay(true);

  const onMouseLeave = () => !lock && setOverlay(false);

  const onOverlayClick = () => {
    dispatch(
      pending === playerId ? cancelAdding() : moveAction.callback(playerId)
    );
  };

  return (
    <div
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      className={classes.playerCard}
    >
      <p className={classes.playerNumber}>{playerNumber}</p>
      <p className={classes.playerDisplayedName}>{playerDisplayedName}</p>

      {overlay && (
        <div onClick={onOverlayClick} className={classes.overlay}>
          {overlayLabel}
        </div>
      )}
    </div>
  );
};
