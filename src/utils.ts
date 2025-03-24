/**
 * Get the current app version
 */
export const getVersion = () => '1.0.0'

export const requestNotificationPermission = async () => {
  if ('Notification' in window) {
    const permission = await Notification.requestPermission()
    if (permission === 'granted') {
      console.log('Notification permission granted.')
    } else {
      console.log('Notification permission denied.')
    }
  }
}
