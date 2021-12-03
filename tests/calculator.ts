import { should } from "chai";
import { calculateNumber } from "../src/calculator";

should();

describe("MM to L", () => {
  it("Число 0", () => {
    calculateNumber("0", "490", "millimeters").should.be.a("string").equal("0.00");
  });
  it("Пустой ввод", () => {
    calculateNumber("", "490", "millimeters").should.be.a("string").equal("");
  });
  it("Округление в меньшую сторону, не среднее значение", () => {
    calculateNumber("1", "490", "millimeters").should.be.a("string").equal("0.00");
  });
  it("Округление в большую сторону, не среднее значение", () => {
    calculateNumber("4", "490", "millimeters").should.be.a("string").equal("2.00");
  });
  it("Среднее значение", () => {
    calculateNumber("5", "490", "millimeters").should.be.a("string").equal("2.00");
  });
  it("Округление в меньшую сторону, среднее значение", () => {
    calculateNumber("7", "490", "millimeters").should.be.a("string").equal("2.00");
  });
  it("Округление в большую сторону, среднее значение", () => {
    calculateNumber("8", "490", "millimeters").should.be.a("string").equal("4.00");
  });
  it("Число 680", () => {
    calculateNumber("680", "490", "millimeters").should.be.a("string").equal("484.20");
  });
  it("Число выше границы", () => {
    calculateNumber("690", "490", "millimeters").should.be.a("string").equal("ЧИСЛО БОЛЬШЕ 680мм");
  });
  it("Отрицательное число", () => {
    calculateNumber("-1", "490", "millimeters").should.be.a("string").equal("ОТРИЦАТЕЛЬНОЕ ЧИСЛО");
  });
  it("Недопустимые символы", () => {
    calculateNumber("!!", "490", "millimeters").should.be.a("string").equal("НЕДОПУСТИМЫЕ СИМВОЛЫ");
  });
  it("Малый бак", () => {
    calculateNumber("329", "490", "millimeters").should.be.a("string").equal("226.00");
  });
  it("Средний бак", () => {
    calculateNumber("329", "530", "millimeters").should.be.a("string").equal("244.40");
  });
  it("Большой бак", () => {
    calculateNumber("329", "550", "millimeters").should.be.a("string").equal("254.00");
  });
  it("Самый большой бак", () => {
    calculateNumber("329", "650", "millimeters").should.be.a("string").equal("300.80");
  });
});

describe("L to MM", () => {
  it("Число 0", () => {
    calculateNumber("0", "490", "liters").should.be.a("number").equal(0);
  });
  it("Пустой ввод", () => {
    calculateNumber("", "490", "liters").should.be.a("string").equal("");
  });
  it("Данных нет", () => {
    calculateNumber("1", "490", "liters").should.be.a("string").equal("НЕТ ДАННЫХ");
  });
  it("Число 4, предполагаемый результат 1", () => {
    calculateNumber("4", "490", "liters").should.be.a("number").equal(10);
  });
  it("Число 368.4, предполагаемый результат 51", () => {
    calculateNumber("368.4", "490", "liters").should.be.a("number").equal(510);
  });
  it("Число 484.2 (последнее возможное для малого бака), предполагаемый результат 68", () => {
    calculateNumber("484.2", "490", "liters").should.be.a("number").equal(680);
  });
  it("Для этого бака данных нет", () => {
    calculateNumber("484.3", "490", "liters").should.be.a("string").equal("НЕТ ДАННЫХ");
  });
  it("Число 642.6 (последнее возможное), предполагаемый результат 68", () => {
    calculateNumber("642.6", "650", "liters").should.be.a("number").equal(680);
  });
  it("Число выше границы", () => {
    calculateNumber("642.7", "490", "liters").should.be.a("string").equal("ЧИСЛО БОЛЬШЕ 642.6л");
  });
  it("Отрицательное число", () => {
    calculateNumber("-1", "490", "liters").should.be.a("string").equal("ОТРИЦАТЕЛЬНОЕ ЧИСЛО");
  });
  it("Недопустимые символы", () => {
    calculateNumber("!!", "490", "liters").should.be.a("string").equal("НЕДОПУСТИМЫЕ СИМВОЛЫ");
  });
  it("Малый бак", () => {
    calculateNumber("0", "490", "liters").should.be.a("number").equal(0);
  });
  it("Средний бак", () => {
    calculateNumber("0", "530", "liters").should.be.a("number").equal(0);
  });
  it("Большой бак", () => {
    calculateNumber("0", "550", "liters").should.be.a("number").equal(0);
  });
  it("Самый большой бак", () => {
    calculateNumber("0", "650", "liters").should.be.a("number").equal(0);
  });
});
