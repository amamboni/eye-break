<script setup lang="ts">
interface Props {
  id: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <label :for="id" class="font-semibold"><slot name="label" /></label>
    <slot :id="id" />
  </div>
</template>
