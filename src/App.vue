<script setup lang="ts">
import { onMounted } from 'vue'
import { requestNotificationPermission } from './utils'

onMounted(() => {
  requestNotificationPermission()
})
</script>

<template>
  <RouterView />
</template>
