import axios from "axios";
import {
  updateUnicorns,
  updateUnicornsSuccess,
  updateUnicornsFail,
  setUnicorn,
  setUnicornFail,
  setUnicornSuccess,
  deleteUnicorn,
  deleteUnicornFail,
  deleteUnicornSuccess,
  postUnicorn,
  postUnicornFail,
  postUnicornSuccess,
} from "./actions";

const key = "3b0fc981a9a34153af859fb7b82d03ca";
const url = "https://crudcrud.com/api/";
const link = url + key + "/unicorns/";

export const apiGetData = () => (dispatch) => {
  dispatch(updateUnicorns());
  return axios
    .get(link)
    .then((response) => {
      dispatch(updateUnicornsSuccess(response.data));
    })
    .catch((errorMessage) => {
      dispatch(
        updateUnicornsFail(
          errorMessage.message + " - Failed to connect to the URL"
        )
      );
    });
};

export const apiDeleteUnicorn = (id) => (dispatch) => {
  dispatch(deleteUnicorn());
  return axios
    .delete(link + id)
    .then(() => dispatch(deleteUnicornSuccess(id)))
    .catch((errorMessage) =>
      dispatch(
        deleteUnicornFail(
          errorMessage.message + " - Failed to delete the Unicorn"
        )
      )
    );
};

export const apiPostUnicorn = (data) => (dispatch) => {
  dispatch(postUnicorn());
  return axios
    .post(link, data)
    .then(() => dispatch(postUnicornSuccess({ ...data, _id: Math.random(10) })))
    .catch((errorMessage) =>
      dispatch(
        postUnicornFail(errorMessage.message + " - Failed to add the Unicorn")
      )
    );
};

export const apiEditUnicorn = (data, id) => (dispatch) => {
  dispatch(setUnicorn());
  delete data._id;
  return axios
    .put(link + id, data)
    .then(() => dispatch(setUnicornSuccess({ ...data, _id: id })))
    .catch((errorMessage) =>
      dispatch(
        setUnicornFail(errorMessage.message + " - Failed to edit the Unicorn")
      )
    );
};
