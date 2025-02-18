<script lang="ts">
  import type { NotificationPayload } from "@/types/calculator";
  import Calculator from "@/components/Calculator.svelte";
  import StatusBar from "@/components/StatusBar.svelte";

  let notification: NotificationPayload | null = $state(null);
</script>

{#if notification}
  <StatusBar {notification} />
{/if}
<main class="container">
  <Calculator sendMessage={(payload) => { notification = payload; }} />
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
