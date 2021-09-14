export const updateUnicorns = () => {
  return {
    type: "GET_DATA",
  };
};
export const updateUnicornsSuccess = (data) => {
  return {
    type: "GET_DATA_SUCCESS",
    unicorns: data,
  };
};
export const updateUnicornsFail = (response) => {
  return {
    type: "GET_DATA_FAIL",
    error: response,
  };
};

export const postUnicorn = () => {
  return {
    type: "POST_DATA",
  };
};
export const postUnicornSuccess = (data) => {
  return {
    type: "POST_DATA_SUCCESS",
    cargo: data,
  };
};
export const postUnicornFail = (response) => {
  return {
    type: "POST_DATA_FAIL",
    error: response,
  };
};

export const setUnicorn = () => {
  return {
    type: "SET_DATA",
  };
};
export const setUnicornSuccess = (data) => {
  return {
    type: "SET_DATA_SUCCESS",
    cargo: data,
  };
};
export const setUnicornFail = (response) => {
  return {
    type: "SET_DATA_FAIL",
    error: response,
  };
};

export const deleteUnicorn = () => {
  return {
    type: "DELETE_DATA",
  };
};
export const deleteUnicornSuccess = (id) => {
  return {
    type: "DELETE_DATA_SUCCESS",
    cargo: id,
  };
};
export const deleteUnicornFail = (response) => {
  return {
    type: "DELETE_DATA_FAIL",
    error: response,
  };
};
