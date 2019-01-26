import { ActionTypes, EmployeeActions } from "../actions/employee.action"
import { initialEmployeeState, IEmployeeState } from "../state/employee.state"

export function employeeReducer(
  state: IEmployeeState = initialEmployeeState,
  action: EmployeeActions
) {
  switch (action.type) {
    case ActionTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    case ActionTypes.LOAD_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
