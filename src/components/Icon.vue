<script setup lang="ts">
import { type Component } from 'vue'

interface Props {
  icon: Component
}

defineProps<Props>()
</script>

<template>
  <component :is="icon" />
</template>
