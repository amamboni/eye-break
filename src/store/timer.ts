import Timer from '@/types/Timer'
import { differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns'
import { padStart, replace } from 'lodash'
import { defineStore } from 'pinia'
import { persist } from './persist'
import { useSettingStore } from './setting'

export const useTimerStore = defineStore('timer', {
  state: () =>
    ({
      screenTime: {
        start: undefined,
        end: undefined,
      },
      breakTime: {
        start: undefined,
        end: undefined,
      },
      screenRemaining: '00:00:00',
      breakRemaining: '00:00:00',
      screenInterval: undefined,
      breakInterval: undefined,
      screenDone: false,
      breakDone: false,
      notificationShown: false,
    } as Timer),
  actions: {
    initialiseScreen() {
      this.breakTime.start = undefined
      this.breakTime.end = undefined
      this.screenTime.start = Date.now()
    },
    startScreen() {
      if (this.screenInterval) {
        clearInterval(this.screenInterval)
      }

      this.notificationShown = false

      const settingStore = useSettingStore()

      const screenTimeMs = settingStore.screenTime * 1000
      this.screenTime.end = this.screenTime.start ? this.screenTime.start + screenTimeMs : 0

      const formatUnit = (value: string) => padStart(replace(value, '-', ''), 2, '0')

      this.screenInterval = setInterval(() => {
        const now = Date.now()

        if (this.screenTime.end) {
          const hours = differenceInHours(this.screenTime.end, now)
          const minutes = differenceInMinutes(this.screenTime.end, now) % 60
          const seconds = differenceInSeconds(this.screenTime.end, now) % 60

          const hoursDisplay = formatUnit(hours.toString())
          const minutesDisplay = formatUnit((minutes % 60).toString())
          const secondsDisplay = formatUnit((seconds % 60).toString())

          this.screenDone = hours < 0 || minutes < 0 || seconds < 0

          this.screenRemaining = `${
            this.screenDone ? '-' : ''
          }${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`

          if (this.screenDone && !this.notificationShown) {
            this.showNotification('Time for Break!', 'Take a break now.')
            this.notificationShown = true
          }
        }
      }, 1000)
    },
    initialiseBreak() {
      this.screenTime.start = undefined
      this.screenTime.end = undefined
      this.breakTime.start = Date.now()
    },
    startBreak() {
      if (this.breakInterval) {
        clearInterval(this.breakInterval)
      }

      this.notificationShown = false

      const settingStore = useSettingStore()

      const breakTimeMs = settingStore.breakTime * 1000
      this.breakTime.end = this.breakTime.start ? this.breakTime.start + breakTimeMs : 0

      const formatUnit = (value: string) => padStart(replace(value, '-', ''), 2, '0')

      this.breakInterval = setInterval(() => {
        const now = Date.now()

        if (this.breakTime.end) {
          const hours = differenceInHours(this.breakTime.end, now)
          const minutes = differenceInMinutes(this.breakTime.end, now) % 60
          const seconds = differenceInSeconds(this.breakTime.end, now) % 60

          const hoursDisplay = formatUnit(hours.toString())
          const minutesDisplay = formatUnit((minutes % 60).toString())
          const secondsDisplay = formatUnit((seconds % 60).toString())

          this.breakDone = hours < 0 || minutes < 0 || seconds < 0

          this.breakRemaining = `${
            this.breakDone ? '-' : ''
          }${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`

          if (this.breakDone && !this.notificationShown) {
            this.showNotification('Back to Work!', 'You can go back to work now.')
            this.notificationShown = true
          }
        }
      }, 1000)
    },
    cancel() {
      this.screenTime.start = undefined
      this.screenTime.end = undefined
      this.breakTime.start = undefined
      this.breakTime.end = undefined
      this.screenDone = false
      this.breakDone = false
    },
    showNotification(title: string, body: string) {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.showNotification(title, {
            body,
            icon: '/eye-break/logo-192x192.png',
            badge: '/eye-break/logo-512x512.png',
          })
        })
      }
    },
  },
  persist,
})
