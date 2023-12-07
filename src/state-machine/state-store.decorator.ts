import 'reflect-metadata'
import { STATE_MACHINE_STORE } from './token'

export const StateStore = (machineName: string): PropertyDecorator =>
  Reflect.metadata(STATE_MACHINE_STORE, machineName)
