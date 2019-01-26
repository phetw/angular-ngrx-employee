import { RouterReducerState } from "@ngrx/router-store"
import { initialEmployeeState, IEmployeeState } from "./employee.state"

export interface IAppState {
  router?: RouterReducerState
  employee: IEmployeeState
}

export const initialAppState: IAppState = {
  employee: initialEmployeeState,
}

export function getInitialState(): IAppState {
  return initialAppState
}
