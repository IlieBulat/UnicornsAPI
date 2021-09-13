const initialState = {
  unicorns: [],
  error: "",
  isLoading: true,
};

const editDataFunc = (initialData, values) => {
  const updatedData = initialData;
  const index = initialData.findIndex((object) => object._id === values._id);
  updatedData[index] = values;
  return updatedData;
};

export function allReducers(state = initialState, action) {
  if (action.type === "getDataFromApi") {
    return { ...state, isLoading: true };
  }
  if (action.type === "getDataFromApiSuccess") {
    return { ...state, unicorns: action.unicorns, isLoading: false };
  }
  if (action.type === "getDataFromApiFail") {
    return { ...state, error: action.error, isLoading: false };
  }

  if (action.type === "postData") {
    return { ...state, isLoading: true };
  }
  if (action.type === "postDataSuccess") {
    return {
      ...state,
      unicorns: [...state.unicorns, action.cargo],
      isLoading: false,
    };
  }
  if (action.type === "postDataFail") {
    return { ...state, error: action.error, isLoading: false };
  }

  if (action.type === "setData") {
    return { ...state, isLoading: true };
  }
  if (action.type === "setDataSuccess") {
    return {
      ...state,
      unicorns: editDataFunc(state.unicorns, action.cargo),
      isLoading: false,
    };
  }
  if (action.type === "setDataFail") {
    return { ...state, error: action.error, isLoading: false };
  }

  if (action.type === "deleteData") {
    return { ...state, isLoading: true };
  }
  if (action.type === "deleteDataSuccess") {
    return {
      ...state,
      unicorns: state.unicorns.filter((uni) => uni._id !== action.cargo),
      isLoading: false,
    };
  }
  if (action.type === "deleteDataFail") {
    return { ...state, error: action.error, isLoading: false };
  }
  return state;
}
