<script setup lang="ts">
interface Props {
  id?: string
  modelValue?: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

const onUpdate = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement)?.checked)
}
</script>

<template>
  <label class="relative cursor-pointer w-fit">
    <input :id="id" type="checkbox" class="sr-only peer" :checked="modelValue" @input="onUpdate" />
    <div
      class="w-11 h-6 bg-gray rounded-full peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"
    ></div>
  </label>
</template>
