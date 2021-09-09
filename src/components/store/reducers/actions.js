export function triggerChange(val) {
  return {
    type: "trigger",
    trigger: val,
  };
}
