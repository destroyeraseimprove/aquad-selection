import { formation_433, formation_442, formation_3421 } from "@mock/formations";

const CHANGE_FORMATION = "CHANGE_FORMATION";

export const FORMATIONS = [formation_433, formation_442, formation_3421];

const initialState = {
  current: formation_433,
  options: FORMATIONS,
};

const change = (state, formationId) => ({
  ...state,
  current: state.options.filter(({ id }) => id === formationId)[0],
});

export const formation = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORMATION:
      return change(state, action.id);
    default:
      return state;
  }
};

export const changeFormation = id => ({
  type: CHANGE_FORMATION,
  id,
});
