const initialState = {
  trigger: true,
  unicorns: "tipa unicorni",
};

export function generalReducer(state = initialState, action) {
  if (action.type === "trigger") {
    return { ...state, trigger: action.trigger };
  }
  if (action.type === "getDataFromApi") {
    return { ...state, unicorns: action.unicorns };
  } else return state;
}
