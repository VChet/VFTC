import tankData from "./tankData.json";
import type { CalculatorMode, CalculatorTankSize } from "./types/Calculator";

function calculateLiters(mm: number, tank: Array<number>): string {
  let result: number;
  if (mm - Math.floor(mm) === 0.5) {
    mm = mm - 0.5;
    result = (tank[mm] + tank[mm + 1]) / 2;
  } else if (mm - Math.floor(mm) !== 0) {
    mm = Math.round(mm * 2) / 2; // округление до ближайшей 0.5 части
    result = parseFloat(calculateLiters(mm, tank));
  } else {
    result = tank[mm];
  }
  return result.toFixed(2);
}

function calculateMM(liters: number, tank: Array<number>) {
  return tank.indexOf(liters);
}

export function calculateNumber(value: string, tankSize: CalculatorTankSize, mode: CalculatorMode) {
  if (value === "") return "";

  const tank: Array<number> = tankData[tankSize];
  const num: number = parseFloat(value);

  if (isNaN(num)) return "НЕДОПУСТИМЫЕ СИМВОЛЫ";
  if (num < 0) return "ОТРИЦАТЕЛЬНОЕ ЧИСЛО";
  if (mode === "millimeters" && num > 680) return "ЧИСЛО БОЛЬШЕ 680мм";
  if (mode === "liters" && num > 642.6) return "ЧИСЛО БОЛЬШЕ 642.6л";

  if (mode === "millimeters") return calculateLiters(num / 10, tank);

  const result = calculateMM(num, tank);
  return result > -1 ? result * 10 : "НЕТ ДАННЫХ";
}
