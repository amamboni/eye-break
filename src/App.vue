<script setup lang="ts">
import { onMounted } from 'vue'

const requestNotificationPermission = async () => {
  if ('Notification' in window) {
    const permission = await Notification.requestPermission()
    if (permission === 'granted') {
      console.log('Notification permission granted.')
    } else {
      console.log('Notification permission denied.')
    }
  }
}

onMounted(() => {
  requestNotificationPermission()
})
</script>

<template>
  <RouterView />
</template>
