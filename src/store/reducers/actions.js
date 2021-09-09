import axios from "axios";

const key = "df8eb0b9afe9404985dd82b013044603";
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
