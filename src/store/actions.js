import axios from "axios";

const key = "533cf8c2ce4541b88c886d1f9dffa07b";
const url = "https://crudcrud.com/api/";
const link = url + key + "/unicorns/";

export function updateUsers(data) {
  return {
    type: "getDataFromApi",
    unicorns: data,
  };
}

export const apiCall = () => {
  return (dispatch) => {
    axios.get(link).then((response) => {
      const data = response.data;
      dispatch(updateUsers(data));
    });
  };
};

export const deleteUnicorn = (id) => {
  return (dispatch) => {
    axios.delete(link + id).then(() => dispatch(apiCall()));
  };
};

export const postUnicorn = (data) => {
  return (dispatch) => {
    axios.post(link, data).then(() => dispatch(apiCall()));
  };
};

export const editUnicorn = (data, id) => {
  delete data._id;
  data.colour = "green";
  return (dispatch) => {
    axios.put(link + id, data).then(() => dispatch(apiCall()));
  };
};
