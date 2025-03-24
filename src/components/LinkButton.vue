<script setup lang="ts">
interface Props {
  to: any
}

defineProps<Props>()
</script>

<template>
  <RouterLink
    :to="to"
    class="p-2.5 rounded flex-classes bg-classes text-classes border-classes ring-classes transition-classes"
  >
    <slot />
  </RouterLink>
</template>

<style scoped>
.flex-classes {
  @apply flex items-center justify-center gap-2.5;
}

.bg-classes {
  @apply bg-primary hover:bg-primary-dark active:bg-primary-dark disabled:bg-primary-light;
}

.text-classes {
  @apply text-white disabled:text-stone;
}

.border-classes {
  @apply border border-transparent;
}

.ring-classes {
  @apply focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1;
}

.transition-classes {
  @apply transition ease-in-out duration-150;
}
</style>
