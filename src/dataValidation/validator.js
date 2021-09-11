const pattern = new RegExp(/^[a-zA-Z]+$/);

export const nameCheck = (name) => {
  let nameResult = pattern.test(name);
  if (!nameResult || name.length < 2) {
    return false;
  } else {
    return true;
  }
};

export const ageCheck = (age) => {
  if (age < 0 || age === "") {
    return false;
  } else {
    return true;
  }
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
