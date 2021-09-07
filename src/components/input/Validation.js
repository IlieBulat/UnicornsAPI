const Validation = (object) => {
  //Name Validation
  let UnicornName = object.name;
  let pattern = new RegExp(/^[a-zA-Z]+$/);
  let nameResult = pattern.test(UnicornName); //true or false
};

export default Validation;
