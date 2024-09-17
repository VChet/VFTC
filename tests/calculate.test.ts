import { describe, expect, it } from "vitest";
import { calculateNumber } from "@/calculator";

describe("millimeters to liters", () => {
  it("число 0", () => {
    expect(calculateNumber("0", "490", "millimeters")).to.equal("0.00");
  });
  it("пустой ввод", () => {
    expect(calculateNumber("", "490", "millimeters")).to.equal("");
  });
  it("округление в меньшую сторону, не среднее значение", () => {
    expect(calculateNumber("1", "490", "millimeters")).to.equal("0.00");
  });
  it("округление в большую сторону, не среднее значение", () => {
    expect(calculateNumber("4", "490", "millimeters")).to.equal("2.00");
  });
  it("среднее значение", () => {
    expect(calculateNumber("5", "490", "millimeters")).to.equal("2.00");
  });
  it("округление в меньшую сторону, среднее значение", () => {
    expect(calculateNumber("7", "490", "millimeters")).to.equal("2.00");
  });
  it("округление в большую сторону, среднее значение", () => {
    expect(calculateNumber("8", "490", "millimeters")).to.equal("4.00");
  });
  it("число 680", () => {
    expect(calculateNumber("680", "490", "millimeters")).to.equal("484.20");
  });
  it("число выше границы", () => {
    expect(calculateNumber("690", "490", "millimeters")).to.equal("ЧИСЛО БОЛЬШЕ 680мм");
  });
  it("отрицательное число", () => {
    expect(calculateNumber("-1", "490", "millimeters")).to.equal("ОТРИЦАТЕЛЬНОЕ ЧИСЛО");
  });
  it("недопустимые символы", () => {
    expect(calculateNumber("!!", "490", "millimeters")).to.equal("НЕДОПУСТИМЫЕ СИМВОЛЫ");
  });
  it("малый бак", () => {
    expect(calculateNumber("329", "490", "millimeters")).to.equal("226.00");
  });
  it("средний бак", () => {
    expect(calculateNumber("329", "530", "millimeters")).to.equal("244.40");
  });
  it("большой бак", () => {
    expect(calculateNumber("329", "550", "millimeters")).to.equal("254.00");
  });
  it("самый большой бак", () => {
    expect(calculateNumber("329", "650", "millimeters")).to.equal("300.80");
  });
});

describe("liters to millimeters", () => {
  it("число 0", () => {
    expect(calculateNumber("0", "490", "liters")).to.equal(0);
  });
  it("пустой ввод", () => {
    expect(calculateNumber("", "490", "liters")).to.equal("");
  });
  it("данных нет", () => {
    expect(calculateNumber("1", "490", "liters")).to.equal("НЕТ ДАННЫХ");
  });
  it("число 4, предполагаемый результат 1", () => {
    expect(calculateNumber("4", "490", "liters")).to.equal(10);
  });
  it("число 368.4, предполагаемый результат 51", () => {
    expect(calculateNumber("368.4", "490", "liters")).to.equal(510);
  });
  it("число 484.2 (последнее возможное для малого бака), предполагаемый результат 68", () => {
    expect(calculateNumber("484.2", "490", "liters")).to.equal(680);
  });
  it("для этого бака данных нет", () => {
    expect(calculateNumber("484.3", "490", "liters")).to.equal("НЕТ ДАННЫХ");
  });
  it("число 642.6 (последнее возможное), предполагаемый результат 68", () => {
    expect(calculateNumber("642.6", "650", "liters")).to.equal(680);
  });
  it("число выше границы", () => {
    expect(calculateNumber("642.7", "490", "liters")).to.equal("ЧИСЛО БОЛЬШЕ 642.6л");
  });
  it("отрицательное число", () => {
    expect(calculateNumber("-1", "490", "liters")).to.equal("ОТРИЦАТЕЛЬНОЕ ЧИСЛО");
  });
  it("недопустимые символы", () => {
    expect(calculateNumber("!!", "490", "liters")).to.equal("НЕДОПУСТИМЫЕ СИМВОЛЫ");
  });
  it("малый бак", () => {
    expect(calculateNumber("0", "490", "liters")).to.equal(0);
  });
  it("средний бак", () => {
    expect(calculateNumber("0", "530", "liters")).to.equal(0);
  });
  it("большой бак", () => {
    expect(calculateNumber("0", "550", "liters")).to.equal(0);
  });
  it("самый большой бак", () => {
    expect(calculateNumber("0", "650", "liters")).to.equal(0);
  });
});
