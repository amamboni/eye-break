<script setup lang="ts">
import FormInput from '@/components/FormInput.vue'
import SecondaryButton from '@/components/SecondaryButton.vue'
import TextInput from '@/components/TextInput.vue'
import { useSettingStore } from '@/store/setting'
import { requestNotificationPermission } from '@/utils'
import { onMounted, ref } from 'vue'

const settingStore = useSettingStore()

const isNotificationEnabled = ref(false)

onMounted(async () => {
  if ('Notification' in window) {
    const permission = await Notification.requestPermission()
    if (permission === 'granted') {
      isNotificationEnabled.value = true
    }
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

    <SecondaryButton :disabled="isNotificationEnabled" @click="requestNotificationPermission">
      Enable Notifications {{ isNotificationEnabled ? '(Enabled)' : '' }}
    </SecondaryButton>
  </form>
</template>
