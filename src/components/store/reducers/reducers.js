const initialState = {
  trigger: true,
};

export function generalReducer(state = initialState, action) {
  switch (action.type) {
    case "trigger": {
      return { ...state, trigger: action.trigger };
    }
    default:
      return state;
  }
}
