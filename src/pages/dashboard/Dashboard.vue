<script setup lang="ts">
import PrimaryButton from '@/components/PrimaryButton.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useTimerStore } from '@/store/timer'
import { getVersion } from '@/utils'
import { format } from 'date-fns'
import { computed, onMounted } from 'vue'

const timerStore = useTimerStore()

const screenTime = computed(() => timerStore.screenTime)
const breakTime = computed(() => timerStore.breakTime)
const screenRemaining = computed(() => timerStore.screenRemaining)
const breakRemaining = computed(() => timerStore.breakRemaining)
const screenDone = computed(() => timerStore.screenDone)
const breakDone = computed(() => timerStore.breakDone)

const initialiseScreen = () => {
  timerStore.initialiseScreen()
  timerStore.startScreen()
}

const initialiseBreak = () => {
  timerStore.initialiseBreak()
  timerStore.startBreak()
}

const cancel = () => {
  timerStore.cancel()
}

onMounted(() => {
  if (screenTime.value.start) {
    timerStore.startScreen()
  }
  if (breakTime.value.start) {
    timerStore.startBreak()
  }
})
</script>

<template>
  <MainLayout>
    <SectionTitle>
      <template #title>
        Welcome to EyeBreak!
        <span class="text-sm text-gray">v{{ getVersion() }}</span>
      </template>
      <template #description>
        Remember to take frequent breaks to help reduce eye strain!
      </template>
    </SectionTitle>

    <template v-if="screenTime.start">
      <p>Started at: {{ format(screenTime.start, 'PPp') }}</p>
      <h1 class="text-7xl text-center mb-6">{{ screenRemaining }}</h1>
    </template>

    <template v-if="breakTime.start">
      <p>Break Started at: {{ format(breakTime.start, 'PPp') }}</p>
      <h1 class="text-7xl text-center mb-6">{{ breakRemaining }}</h1>
    </template>

    <template v-if="!screenTime.start || breakTime.start">
      <PrimaryButton @click="initialiseScreen" :class="{ 'animate-bounce': breakDone }">
        Start Screen Time!
      </PrimaryButton>
    </template>
    <template v-if="screenTime.start">
      <PrimaryButton @click="initialiseBreak" :class="{ 'animate-bounce': screenDone }">
        Start Break Time
      </PrimaryButton>
    </template>
    <template v-if="screenTime.start || breakTime.start">
      <PrimaryButton @click="cancel">Cancel</PrimaryButton>
    </template>
  </MainLayout>
</template>
