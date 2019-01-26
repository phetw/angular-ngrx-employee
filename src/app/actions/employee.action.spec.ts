import {
  LoadEmployee,
  ActionTypes,
  LoadEmployeeSuccess,
  LoadEmployeeFailed,
} from "./employee.action"
import { IEmployee } from "../models/employee.model"

describe("Employee action", () => {
  it("should create LoadEmployee action", () => {
    const action = new LoadEmployee()
    expect({ ...action }).toEqual({ type: ActionTypes.LOAD_REQUEST })
  })
  it("should create LoadEmployeeSuccess action", () => {
    const payload: IEmployee[] = [
      { Id: "2", Firstname: "wasuwat", Lastname: "lim", Age: 22 },
    ]
    const action = new LoadEmployeeSuccess(payload)

    expect({ ...action }).toEqual({
      type: ActionTypes.LOAD_SUCCESS,
      payload: payload,
    })
  })
  it("should create LoadEmployeeFailed action", () => {
    const error: string = "error"
    const action = new LoadEmployeeFailed(error)

    expect({ ...action }).toEqual({
      type: ActionTypes.LOAD_FAILED,
      payload: error,
    })
  })
})
