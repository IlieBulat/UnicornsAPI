export const updateUnicorns = () => {
  return {
    type: "getDataFromApi",
  };
};
export const updateUnicornsSuccess = (data) => {
  return {
    type: "getDataFromApiSuccess",
    unicorns: data,
  };
};
export const updateUnicornsFail = (response) => {
  return {
    type: "getDataFromApiFail",
    error: response,
  };
};

export const postUnicorn = () => {
  return {
    type: "postData",
  };
};
export const postUnicornSuccess = (data) => {
  return {
    type: "postDataSuccess",
    cargo: data,
  };
};
export const postUnicornFail = (response) => {
  return {
    type: "postDataFail",
    error: response,
  };
};

export const setUnicorn = () => {
  return {
    type: "setData",
  };
};
export const setUnicornSuccess = (data) => {
  return {
    type: "setDataSuccess",
    cargo: data,
  };
};
export const setUnicornFail = (response) => {
  return {
    type: "setDataFail",
    error: response,
  };
};

export const deleteUnicorn = () => {
  return {
    type: "deleteDataSuccess",
  };
};
export const deleteUnicornSuccess = (id) => {
  return {
    type: "deleteDataSuccess",
    cargo: id,
  };
};
export const deleteUnicornFail = (response) => {
  return {
    type: "deleteDataFail",
    error: response,
  };
};
