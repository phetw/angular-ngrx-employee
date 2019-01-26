import { IEmployee } from "../models/employee.model"

export interface IEmployeeState {
  loading: boolean
  data: IEmployee[]
  error?: any
}

export const initialEmployeeState: IEmployeeState = {
  loading: false,
  data: [],
  error: null,
}
