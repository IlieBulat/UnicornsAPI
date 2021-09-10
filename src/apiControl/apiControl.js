import axios from "axios";

const key = "ce690e6aa5d244ce95eb9251b67f6725";
const url = "https://crudcrud.com/api/";
const link = url + key + "/unicorns/";

// const getData = () => {
//   const unicornsData = axios.get(link);
//   return unicornsData.data;
// return fetch(link).then((response) => {
//   return response.json();
// });
// };

export const postData = (data) => {
  fetch(link, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(() => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Trying to POST a new unicorn, Error:", error);
    });
};

// export const deleteData = (id) => {
//   fetch(link + id, {
//     method: "DELETE",
//   })
//     .then((res) => res.text())
//     .catch((error) => {
//       console.error("Trying to delete a Unicorn, Error:", error);
//     });
// };

export const editData = () => {
  console.log("EDIT");
};
// export default getData;
