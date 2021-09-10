import axios from "axios";

const key = "ce690e6aa5d244ce95eb9251b67f6725";
const url = "https://crudcrud.com/api/";
const link = url + key + "/unicorns/";

export function triggerChange(val) {
  return {
    type: "trigger",
    trigger: val,
  };
}
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
        console.log("ERROR:" + error.message);
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
