import { Action } from "@ngrx/store"
import { ActionTypes } from "../actions/employee.action"
import { Employee } from "../models/employee.model"

interface IAction extends Action {
  type: string
  payload?: any
}

export interface IEmployeeState {
  loading: boolean
  data: Employee[]
  error?: any
}

export const initialState = {
  loading: false,
  data: [],
  error: null,
}

export function employeeReducer(
  state: IEmployeeState = initialState,
  action: IAction
) {
  switch (action.type) {
    case ActionTypes.LOAD_REQUEST:
      return {
        ...initialState,
        loading: true,
      }
    case ActionTypes.LOAD_SUCCESS:
      return {
        ...initialState,
        data: action.payload,
        loading: false,
      }
    case ActionTypes.LOAD_FAILED:
      return {
        ...initialState,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
