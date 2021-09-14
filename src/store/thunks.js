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

const key = "6e32cd0e17514a77b93fa064fe24fb71";
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
    .catch((error) =>
      dispatch(
        deleteUnicornFail(error.message + " - Failed to delete the Unicorn")
      )
    );
};

export const apiPostUnicorn = (data) => (dispatch) => {
  dispatch(postUnicorn());
  return axios
    .post(link, data)
    .then(() => dispatch(postUnicornSuccess({ ...data, _id: Math.random(10) })))
    .catch((error) =>
      dispatch(postUnicornFail(error.message + " - Failed to add the Unicorn"))
    );
};

export const apiEditUnicorn =
  ({ name, colour, age }, id) =>
  (dispatch) => {
    dispatch(setUnicorn());
    const data = { name, colour, age };
    return axios
      .put(link + id, data)
      .then(() => dispatch(setUnicornSuccess({ ...data, _id: id })))
      .catch((error) =>
        dispatch(
          setUnicornFail(error.message + " - Failed to edit the Unicorn")
        )
      );
  };
