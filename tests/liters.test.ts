import { calculateNumber } from "@/calculator";
import { test, expect } from "vitest";

test("Число 0", () => {
  expect(calculateNumber("0", "490", "liters")).to.equal(0);
});
test("Пустой ввод", () => {
  expect(calculateNumber("", "490", "liters")).to.equal("");
});
test("Данных нет", () => {
  expect(calculateNumber("1", "490", "liters")).to.equal("НЕТ ДАННЫХ");
});
test("Число 4, предполагаемый результат 1", () => {
  expect(calculateNumber("4", "490", "liters")).to.equal(10);
});
test("Число 368.4, предполагаемый результат 51", () => {
  expect(calculateNumber("368.4", "490", "liters")).to.equal(510);
});
test("Число 484.2 (последнее возможное для малого бака), предполагаемый результат 68", () => {
  expect(calculateNumber("484.2", "490", "liters")).to.equal(680);
});
test("Для этого бака данных нет", () => {
  expect(calculateNumber("484.3", "490", "liters")).to.equal("НЕТ ДАННЫХ");
});
test("Число 642.6 (последнее возможное), предполагаемый результат 68", () => {
  expect(calculateNumber("642.6", "650", "liters")).to.equal(680);
});
test("Число выше границы", () => {
  expect(calculateNumber("642.7", "490", "liters")).to.equal("ЧИСЛО БОЛЬШЕ 642.6л");
});
test("Отрицательное число", () => {
  expect(calculateNumber("-1", "490", "liters")).to.equal("ОТРИЦАТЕЛЬНОЕ ЧИСЛО");
});
test("Недопустимые символы", () => {
  expect(calculateNumber("!!", "490", "liters")).to.equal("НЕДОПУСТИМЫЕ СИМВОЛЫ");
});
test("Малый бак", () => {
  expect(calculateNumber("0", "490", "liters")).to.equal(0);
});
test("Средний бак", () => {
  expect(calculateNumber("0", "530", "liters")).to.equal(0);
});
test("Большой бак", () => {
  expect(calculateNumber("0", "550", "liters")).to.equal(0);
});
test("Самый большой бак", () => {
  expect(calculateNumber("0", "650", "liters")).to.equal(0);
});
