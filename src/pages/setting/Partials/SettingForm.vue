<script setup lang="ts">
import FormInput from '@/components/FormInput.vue'
import SwitchInput from '@/components/SwitchInput.vue'
import TextInput from '@/components/TextInput.vue'
import { useSettingStore } from '@/store/setting'
import { onMounted, watch } from 'vue'

const settingStore = useSettingStore()

watch(
  () => settingStore.notificationEnabled,
  (value) => {
    if (value) {
      Notification.requestPermission().then((permission) => {
        if (permission !== 'granted') {
          settingStore.notificationEnabled = false
        }
      })
    } else {
      alert(
        'To disable notifications, go to your browser settings and block notifications for this site.'
      )
    }
  }
)

onMounted(() => {
  if (!('Notification' in window)) {
    console.log('This browser does not support desktop notification')
  } else if (Notification.permission === 'granted') {
    settingStore.notificationEnabled = true
  } else {
    settingStore.notificationEnabled = false
  }
})
</script>

<template>
  <form class="flex flex-col gap-2">
    <FormInput id="screenTime">
      <template #label>Screen Time</template>
      <template #default="{ id }">
        <TextInput
          :id="id"
          type="number"
          v-model="settingStore.screenTime"
          placeholder="How long should you be in screen?"
        />
      </template>
    </FormInput>

    <FormInput id="breakTime">
      <template #label>Break Time</template>
      <template #default="{ id }">
        <TextInput
          :id="id"
          type="number"
          v-model="settingStore.breakTime"
          placeholder="How long should you take a break?"
        />
      </template>
    </FormInput>

    <FormInput id="notificationEnabled">
      <template #label>Notification Enabled</template>
      <template #default="{ id }">
        <SwitchInput :id="id" v-model="settingStore.notificationEnabled" />
      </template>
    </FormInput>
  </form>
</template>
