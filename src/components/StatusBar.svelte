<script lang="ts">
  import type { NotificationPayload } from "@/types/calculator";

  interface Props {
    notification: NotificationPayload | null
  };
  let {
    notification = $bindable({ message: null, color: "#27272780" })
  }: Props = $props();

  $effect.pre(() => {
    setTimeout(() => { notification = null; }, 3000);
  });
</script>

{#if notification}
  <section class="status" style="background-color: {notification.color}">
    {notification.message}
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
