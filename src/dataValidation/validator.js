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

export const isColor = (strColor) => {
  const cssColors = new Option().style;
  cssColors.color = strColor;
  return cssColors.color !== "";
};

export const colorCheck = (color) => {
  if (!isColor(color)) {
    return false;
  } else {
    return true;
  }
};