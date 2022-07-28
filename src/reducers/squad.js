import players from "@mock/players";

const ADD_PLAYER = "ADD_PLAYER";
const REMOVE_PLAYER = "REMOVE_PLAYER";
const COMPLETE_ADDING = "COMPLETE_ADDING";
const CANCEL_ADDING = "CANCEL_ADDING";

const initialState = {
  players,
  pending: null,
};

const setPlayerRole = (state, id, role) => ({
  ...state,
  players: [
    ...state.players.filter(({ playerId }) => playerId !== id),
    ...[
      {
        ...state.players.filter(({ playerId }) => playerId === id)[0],
        playerRole: role,
      },
    ],
  ],
  pending: null,
});

const setPending = (state, playerId) => ({
  ...state,
  pending: playerId,
});

export const squad = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return setPending(state, action.playerId);
    case CANCEL_ADDING:
      return setPending(state, null);
    case COMPLETE_ADDING:
      return setPlayerRole(state, state.pending, action.role);
    case REMOVE_PLAYER:
      return setPlayerRole(state, action.playerId, null);
    default:
      return state;
  }
};

export const addPlayer = playerId => ({
  type: ADD_PLAYER,
  playerId,
});

export const removePlayer = playerId => ({
  type: REMOVE_PLAYER,
  playerId,
});

export const completeAdding = role => ({
  type: COMPLETE_ADDING,
  role,
});

export const cancelAdding = () => ({
  type: CANCEL_ADDING,
});
