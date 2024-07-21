<script lang="ts">
  import type { CalculatorStatus } from "@/types/Calculator";
  import Calculator from "@/components/Calculator.svelte";
  import StatusBar from "@/components/StatusBar.svelte";

  let status: CalculatorStatus;
</script>

<StatusBar {status} />
<main class="container">
  <Calculator on:status={({ detail }) => (status = { ...status, ...detail })} />
</main>

<style lang="scss">
  main {
    padding-top: 10vh;
  }
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (width >= 768px) {
    .container {
      width: 750px;
    }
  }
  @media (width >= 992px) {
    .container {
      width: 970px;
    }
  }
  @media (width >= 1200px) {
    .container {
      width: 1170px;
    }
  }
</style>
