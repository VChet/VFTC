import { calculateNumber } from "@/calculator";
import { test, expect } from "vitest";

test("Число 0", () => {
  expect(calculateNumber("0", "490", "millimeters")).to.equal("0.00");
});
test("Пустой ввод", () => {
  expect(calculateNumber("", "490", "millimeters")).to.equal("");
});
test("Округление в меньшую сторону, не среднее значение", () => {
  expect(calculateNumber("1", "490", "millimeters")).to.equal("0.00");
});
test("Округление в большую сторону, не среднее значение", () => {
  expect(calculateNumber("4", "490", "millimeters")).to.equal("2.00");
});
test("Среднее значение", () => {
  expect(calculateNumber("5", "490", "millimeters")).to.equal("2.00");
});
test("Округление в меньшую сторону, среднее значение", () => {
  expect(calculateNumber("7", "490", "millimeters")).to.equal("2.00");
});
test("Округление в большую сторону, среднее значение", () => {
  expect(calculateNumber("8", "490", "millimeters")).to.equal("4.00");
});
test("Число 680", () => {
  expect(calculateNumber("680", "490", "millimeters")).to.equal("484.20");
});
test("Число выше границы", () => {
  expect(calculateNumber("690", "490", "millimeters")).to.equal("ЧИСЛО БОЛЬШЕ 680мм");
});
test("Отрицательное число", () => {
  expect(calculateNumber("-1", "490", "millimeters")).to.equal("ОТРИЦАТЕЛЬНОЕ ЧИСЛО");
});
test("Недопустимые символы", () => {
  expect(calculateNumber("!!", "490", "millimeters")).to.equal("НЕДОПУСТИМЫЕ СИМВОЛЫ");
});
test("Малый бак", () => {
  expect(calculateNumber("329", "490", "millimeters")).to.equal("226.00");
});
test("Средний бак", () => {
  expect(calculateNumber("329", "530", "millimeters")).to.equal("244.40");
});
test("Большой бак", () => {
  expect(calculateNumber("329", "550", "millimeters")).to.equal("254.00");
});
test("Самый большой бак", () => {
  expect(calculateNumber("329", "650", "millimeters")).to.equal("300.80");
});
