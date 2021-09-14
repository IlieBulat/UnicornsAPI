import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import {
  apiGetData,
  apiDeleteUnicorn,
  apiPostUnicorn,
  apiEditUnicorn,
} from "./thunks";

const api = { apiGetData, apiDeleteUnicorn, apiPostUnicorn, apiEditUnicorn };

const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe("Tests Get", () => {
  beforeEach(() => {
    store.clearActions();
  });
  it("Get data from API", () => {
    store.dispatch(apiGetData());

    const expected = [
      {
        type: "GET_DATA",
      },
    ];
    const action = store.getActions();
    expect(expected).toEqual(action);
  });
});
