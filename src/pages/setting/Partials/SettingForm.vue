<script setup lang="ts">
import FormInput from '@/components/FormInput.vue'
import TextInput from '@/components/TextInput.vue'
import { useSettingStore } from '@/store/setting'

const settingStore = useSettingStore()
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
          autofocus
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
  </form>
</template>
