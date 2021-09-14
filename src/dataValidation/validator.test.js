import { nameCheck, ageCheck, colorCheck } from "./validator";

it("Name validation", () => {
  expect(nameCheck("TestName")).toEqual(true);
  expect(nameCheck("Test Name")).toEqual(true);
  expect(nameCheck("TestName2")).toEqual(false);
  expect(nameCheck("1234")).toEqual(false);
  expect(nameCheck(1234)).toEqual(false);
});

it("Age validation", () => {
  expect(ageCheck(0)).toEqual(true);
  expect(ageCheck(123456789)).toEqual(true);
  expect(ageCheck("123456789")).toEqual(true);
  expect(ageCheck("123456789ABC")).toEqual(true);
  expect(ageCheck("ABC")).toEqual(false);
  expect(ageCheck(-2)).toEqual(false);
  expect(ageCheck(" ")).toEqual(false);
});

it("Color validation", () => {
  expect(colorCheck(0)).toEqual(false);
  expect(colorCheck(123456789)).toEqual(false);
  expect(colorCheck("red")).toEqual(true);
  expect(colorCheck("GREEN")).toEqual(true);
  expect(colorCheck("YElloW2")).toEqual(false);
  expect(colorCheck("AqUA")).toEqual(true);
  expect(colorCheck(" ")).toEqual(false);
});
