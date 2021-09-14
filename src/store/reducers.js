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
  switch (action.type) {
    case "GET_DATA":
      return { ...state, isLoading: true };
    case "GET_DATA_SUCCESS":
      return {
        ...state,
        unicorns: action.unicorns,
        isLoading: false,
        error: "",
      };
    case "GET_DATA_FAIL":
      return { ...state, error: action.error, isLoading: false };

    case "POST_DATA":
      return { ...state, isLoading: true };
    case "POST_DATA_SUCCESS":
      return {
        ...state,
        unicorns: [...state.unicorns, action.cargo],
        isLoading: false,
      };
    case "POST_DATA_FAIL":
      return { ...state, error: action.error, isLoading: false };

    case "SET_DATA":
      return { ...state, isLoading: true };
    case "SET_DATA_SUCCESS":
      return {
        ...state,
        unicorns: editDataFunc(state.unicorns, action.cargo),
        isLoading: false,
      };
    case "SET_DATA_FAIL":
      return { ...state, error: action.error, isLoading: false };

    case "DELETE_DATA":
      return { ...state, isLoading: true };
    case "DELETE_DATA_SUCCESS":
      return {
        ...state,
        unicorns: state.unicorns.filter((uni) => uni._id !== action.cargo),
        isLoading: false,
      };
    case "DELETE_DATA_FAIL":
      return { ...state, error: action.error, isLoading: false };

    default:
      return state;
  }
}
