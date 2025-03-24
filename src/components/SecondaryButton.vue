<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined
}

withDefaults(defineProps<Props>(), {
  type: 'button',
})
</script>

<template>
  <button
    :type="type"
    class="p-2.5 rounded flex-classes bg-classes text-classes border-classes ring-classes transition-classes"
  >
    <slot />
  </button>
</template>

<style scoped>
.flex-classes {
  @apply flex items-center justify-center gap-2.5;
}

.bg-classes {
  @apply bg-white hover:bg-primary-light active:bg-primary-light disabled:bg-zinc;
}

.text-classes {
  @apply hover:text-primary disabled:text-stone;
}

.border-classes {
  @apply border hover:border-primary disabled:border-slate;
}

.ring-classes {
  @apply focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1;
}

.transition-classes {
  @apply transition ease-in-out duration-150;
}
</style>
