<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface Props {
  type?: string
  modelValue?: string | number | null
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  modelValue: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

const input = ref<HTMLInputElement | null>(null)

const onUpdate = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement)?.value)
}

onMounted(() => {
  if (input.value && input.value.hasAttribute('autofocus')) {
    input.value.focus()
  }
})

defineExpose({
  focus: () => {
    if (input.value) input.value.focus()
  },
})
</script>

<template>
  <input
    ref="input"
    :type="type"
    class="p-2.5 rounded bg-classes text-classes border-classes transition-classes"
    :value="modelValue"
    @input="onUpdate"
  />
</template>

<style scoped>
.bg-classes {
  @apply bg-white disabled:bg-zinc;
}

.text-classes {
  @apply placeholder:text-gray disabled:placeholder:text-stone disabled:text-stone;
}

.border-classes {
  @apply border border-slate hover:border-gray focus:border-primary focus:ring-0 disabled:border-slate;
}

.transition-classes {
  @apply transition ease-in-out duration-150;
}
</style>
