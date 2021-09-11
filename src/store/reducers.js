const validatorsVerify = (element) => element === false;

const initialState = {
  unicorns: [
    { _id: "1", name: "Loading...", age: "Loading...", colour: "Loading..." },
  ],
  inputValidators: {
    nameTest: false,
    ageTest: false,
    colourTest: false,
  },
  inputValidatorsFinalResult: {
    result: false,
  },
};

export function generalReducer(state = initialState, action) {
  if (action.type === "getDataFromApi") {
    return { ...state, unicorns: action.unicorns };
  }

  if (action.type === "confirmNameValidation") {
    return { ...state, unicorns: action.nameTest };
  }
  if (action.type === "denymNameValidation") {
    return { ...state, unicorns: action.nameTest };
  }

  if (action.type === "confirmAgeValidation") {
    return { ...state, unicorns: action.ageTest };
  }
  if (action.type === "denyAgeValidation") {
    return { ...state, unicorns: action.ageTest };
  }

  if (action.type === "confirmColourValidation") {
    return { ...state, unicorns: action.colourTest };
  }
  if (action.type === "denyColourValidation") {
    return { ...state, unicorns: action.colourTest };
  }
  return state;
}
