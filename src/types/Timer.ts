export interface Period {
  start?: number
  end?: number
}

export default interface Timer {
  screenTime: Period
  breakTime: Period
  screenRemaining: string
  breakRemaining: string
  screenInterval?: number
  breakInterval?: number
  screenDone: boolean
  breakDone: boolean
  notificationShown: boolean
}
