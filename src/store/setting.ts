import Setting from '@/types/Setting'
import { defineStore } from 'pinia'
import { persist } from './persist'

export const useSettingStore = defineStore('setting', {
  state: () =>
    ({
      screenTime: 1200,
      breakTime: 20,
    } as Setting),
  persist,
})
