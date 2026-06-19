export type AppMeta = {
  name: string
  version: string
}

export const appMeta: AppMeta = {
  name: 'Obsi Tattoo Studio',
  version: '0.0.1',
}

export type HealthResponse = {
  status: 'ok'
  timestamp: string
}
