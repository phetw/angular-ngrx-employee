import { createSelector } from "@ngrx/store"
import { IAppState } from "../state/app.state"
import { IEmployeeState } from "../state/employee.state"

const selectEmployee = (state: IAppState) => state.employee

export const data = createSelector(
  selectEmployee,
  (state: IEmployeeState) => state.data
)

export const loading = createSelector(
  selectEmployee,
  (state: IEmployeeState) => state.loading
)

export const error = createSelector(
  selectEmployee,
  (state: IEmployeeState) => state.error
)
