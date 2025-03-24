<script setup lang="ts">
interface Props {
  to: any
}

defineProps<Props>()
</script>

<template>
  <RouterLink
    :to="to"
    class="p-2.5 flex-classes bg-classes text-classes border-classes transition-classes"
    active-class="active-classes"
  >
    <slot />
  </RouterLink>
</template>

<style scoped>
.flex-classes {
  @apply flex flex-col items-center gap-0.5;
}

.bg-classes {
  @apply hover:bg-primary-light active:bg-primary-dark disabled:bg-zinc;
}

.text-classes {
  @apply hover:text-primary active:text-white disabled:text-stone;
}

.border-classes {
  @apply border-t hover:border-primary disabled:border-slate;
}

.ring-classes {
  @apply focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1;
}

.transition-classes {
  @apply transition ease-in-out duration-150;
}
.active-classes {
  @apply bg-primary-light border-primary text-primary;
}
</style>
