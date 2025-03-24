import Setting from '@/types/Setting'
import { defineStore } from 'pinia'
import { persist } from './persist'

export const useSettingStore = defineStore('setting', {
  state: () =>
    ({
      screenTime: 1200,
      breakTime: 20,
      notificationEnabled: false,
    } as Setting),
  persist,
})
