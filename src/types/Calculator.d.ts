export type CalculatorMode = "millimeters" | "liters";
export type CalculatorTankSize = "490" | "530" | "550" | "650";
export type CalculatorStatus = {
  active: boolean
  message: string | null
  color?: string
  duration?: number
};
