<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { calculateNumber } from "../calculator";
  import type { CalculatorMode, CalculatorStatus, CalculatorTankSize } from "../types/Calculator";

  let input: string;
  let output: string;

  let selectedTank: CalculatorTankSize;
  let mode: CalculatorMode = "millimeters";
  function changeMode() {
    mode = mode === "millimeters" ? "liters" : "millimeters";
  }

  function calculate() {
    if (!input || !selectedTank) return;
    const inputArray = input.replace(/,/g, ".").split("\n");
    const resultArray: Array<string> = inputArray.reduce((acc: Array<string>, value: string) => {
      acc.push(calculateNumber(value, selectedTank, mode).toString());
      return acc;
    }, []);
    output = resultArray.join("\n").replace(/\./g, ",");
  }

  const dispatch = createEventDispatcher();
  function dispatchMessage(message: string, color: string, duration: number = 3000): void {
    const data: CalculatorStatus = { message, active: true };
    if (color) data.color = color;
    if (duration) data.duration = duration;
    dispatch("status", data);
  }

  function copyToBuffer() {
    navigator.clipboard.writeText(output);
    dispatchMessage("Скопировано", "#2aa22a80");
  }
</script>

<form class="calculator" on:submit|preventDefault={calculate}>
  <div class="area">
    <textarea
      bind:value={input}
      type="textarea"
      rows="20"
      cols="30"
      spellcheck="false"
      placeholder={mode === "millimeters" ? "Замеры в миллиметрах" : "Замеры в литрах"}
    />
    <select class:empty={!selectedTank} bind:value={selectedTank}>
      <option selected value hidden>Выбор бака</option>
      <option value="490">Малый (490)</option>
      <option value="530">Средний (530)</option>
      <option value="550">Большой (550)</option>
      <option value="650">Очень большой (650)</option>
    </select>
  </div>
  <div class="center-block">
    <button class="success" type="submit" disabled={!selectedTank}>Рассчитать</button>
    <button type="button" on:click={changeMode}>{mode === "millimeters" ? "ММ → Л" : "Л → ММ"}</button>
    <button class="error" type="reset">Очистить поля</button>
  </div>
  <div class="area">
    <textarea
      bind:value={output}
      type="textarea"
      rows="20"
      cols="30"
      spellcheck="false"
      placeholder={mode === "millimeters" ? "Замеры в литрах" : "Замеры в миллиметрах"}
    />
    <button type="button" on:click={copyToBuffer} disabled={!output}>Копировать</button>
  </div>
</form>

<style lang="scss">
  .calculator {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    button {
      min-width: 200px;
      padding: 10px;
      border: 1px solid #343a40;
      border-radius: 4px;
      background-color: #343a40;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
      transition: color 0.3s, background-color 0.3s, border-color 0.3s;
      &:hover {
        color: #fff;
        background-color: #23272b;
        border-color: #1d2124;
      }
      &.success {
        color: #155724;
        background-color: #d4edda;
        border-color: #c3e6cb;
        &:hover {
          color: #fff;
          background-color: #218838;
          border-color: #1e7e34;
        }
      }
      &.error {
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
        &:hover {
          color: #fff;
          background-color: #dc3545;
          border-color: #dc3545;
        }
      }
      &:disabled {
        pointer-events: none;
        opacity: 0.75;
      }
    }
    .area {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 0 8px;
      textarea,
      select,
      button {
        width: 100%;
      }
      select,
      textarea {
        opacity: 0.9;
        &:focus {
          opacity: 1;
        }
      }
      select {
        height: 40px;
        color: #222;
        font-size: 16px;
        font-weight: bold;
        &.empty {
          border: 3px solid red;
          border-radius: 4px;
        }
      }
      textarea {
        resize: vertical;
        &::selection {
          background-color: #22aa2a60;
        }
        &::placeholder {
          text-align: center;
          color: #222;
          font-size: 20px;
        }
      }
    }
    .center-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }
</style>
