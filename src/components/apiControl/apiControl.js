const key = "2ff81dbb090b46ad98df932c84944557";
const url = "https://crudcrud.com/api/";

const getData = async () => {
  return await fetch(url + key + "/unicorns").then((response) => {
    return response.json();
  });
};

export const postData = (data) => {
  fetch(url + key + "/unicorns", {
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

export const deleteData = (id) => {
  fetch(url + key + "/unicorns/" + id, {
    method: "DELETE",
  })
    .then((res) => res.text())
    .catch((error) => {
      console.error("Trying to delete a Unicorn, Error:", error);
    });
};

export const editData = () => {
  return fetch(url + key + "/unicorns").then((response) => response.json());
};
export default getData;
