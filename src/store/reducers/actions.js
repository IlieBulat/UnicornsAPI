import axios from "axios";

const key = "d506e45973404dedad6e5e528992b7c1";
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
    axios
      .get(link)
      .then((response) => {
        const data = response.data;
        dispatch(updateUsers(data));
      })
      .catch((error) => {
        console.log("Trying to get data from API, Error:" + error.message);
      });
  };
};

export const deleteUnicorn = (id) => {
  return (dispatch) => {
    axios
      .delete(link + id)
      .then(() => dispatch(apiCall()))
      .catch((error) => {
        console.error("Trying to delete a Unicorn, Error:", error);
      });
  };
};

export const postUnicorn = (data) => {
  return (dispatch) => {
    axios
      .post(link, data)
      .then(() => dispatch(apiCall()))
      .catch((error) => {
        console.error("Trying to POST a new unicorn, Error:", error);
      });
  };
};
