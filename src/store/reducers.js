const initialState = {
  unicorns: [
    { _id: "1", name: "Loading...", age: "Loading...", colour: "Loading..." },
  ],
};

export function generalReducer(state = initialState, action) {
  if (action.type === "getDataFromApi") {
    return { ...state, unicorns: action.unicorns };
  }
  return state;
}
