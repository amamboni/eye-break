import type { Serializer } from 'pinia-plugin-persistedstate'

export const persist = {
  storage: localStorage,
  serializer: {
    deserialize: (value) => JSON.parse(atob(value)),
    serialize: (value) => btoa(JSON.stringify(value)),
  } as Serializer,
}
