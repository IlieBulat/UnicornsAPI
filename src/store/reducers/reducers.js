const initialState = {
  trigger: true,
  unicorns: [{ name: "Loading...", age: "Loading...", colour: "Loading..." }],
};

export function generalReducer(state = initialState, action) {
  if (action.type === "trigger") {
    return { ...state, trigger: action.trigger };
  }
  if (action.type === "getDataFromApi") {
    return { ...state, unicorns: action.unicorns };
  }
  return state;
}
