import ToastStatus from './enums/ToastStatus'

export default interface Toast {
  id: string
  status: ToastStatus
  message: string
}
