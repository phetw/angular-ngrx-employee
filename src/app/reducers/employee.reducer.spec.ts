import { initialEmployeeState } from "../state/employee.state"
import { employeeReducer } from "./employee.reducer"
import {
  LoadEmployee,
  LoadEmployeeSuccess,
  LoadEmployeeFailed,
} from "../actions/employee.action"
import { IEmployee } from "../models/employee.model"

describe("Employee reducer", () => {
  describe("LoadEmployee action", () => {
    it("should return loading = true", () => {
      const action = new LoadEmployee()
      const state = employeeReducer(initialEmployeeState, action)

      expect(state.loading).toBe(true)
      expect(state.error).toBe(null)
    })
  })

  describe("LoadEmployeeSuccess action", () => {
    it("should return loading = false with employee data", () => {
      const payload: IEmployee[] = [
        { Id: "2", Firstname: "wasuwat", Lastname: "lim", Age: 22 },
      ]
      const action = new LoadEmployeeSuccess(payload)
      const state = employeeReducer(initialEmployeeState, action)

      expect(state.loading).toBe(false)
      expect(state.data.length).toBe(1)
      expect(state.error).toBe(null)
    })
  })

  describe("LoadEmployeeFailed action", () => {
    it("should return loading = false with error message", () => {
      const error: string = "this is mock error"
      const action = new LoadEmployeeFailed(error)
      const state = employeeReducer(initialEmployeeState, action)

      expect(state.loading).toBe(false)
      expect(state.data.length).toBe(0)
      expect(state.error).toEqual(error)
    })
  })
})
