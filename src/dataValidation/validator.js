const pattern = new RegExp(/^[a-zA-Z_ ]+$/);

export const nameCheck = (name) => {
  let nameResult = pattern.test(name);
  if (!nameResult || name.length < 2) {
    return false;
  } else {
    return true;
  }
};

export const ageCheck = (age) => {
  return parseInt(age) >= 0;
};

export const colorCheck = (color) => {
  const cssColors = new Option().style;
  cssColors.color = color;
  return cssColors.color !== "";
};
