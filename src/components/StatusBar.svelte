<script lang="ts">
  import type { CalculatorStatus } from "../types/Calculator";

  export let status: CalculatorStatus = {
    active: false,
    message: null,
    color: "#27272780",
  };

  $: if (status && status.active) {
    setTimeout(() => (status.active = false), status.duration);
  }
</script>

{#if status.active}
  <section class="status" style="background-color: {status.color}">
    {status.message}
  </section>
{/if}

<style lang="scss">
  .status {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 10px 0;
  }
</style>
