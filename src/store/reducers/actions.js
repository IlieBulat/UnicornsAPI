export function triggerChange(val) {
  return {
    type: "trigger",
    trigger: val,
  };
}
export function apiCall(data) {
  return {
    type: "getDataFromApi",
    unicorns: data,
  };
}
