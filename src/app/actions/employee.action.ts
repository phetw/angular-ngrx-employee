import { Action } from "@ngrx/store"
import { IEmployee } from "../models/employee.model"

export enum ActionTypes {
  LOAD_REQUEST = "[Employee] Load Request",
  LOAD_SUCCESS = "[Employee] Load Success",
  LOAD_FAILED = "[Employee] Load Failed",
}

export class LoadEmployee implements Action {
  readonly type = ActionTypes.LOAD_REQUEST
}

export class LoadEmployeeSuccess implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS
  constructor(public payload: IEmployee[]) {}
}

export class LoadEmployeeFailed implements Action {
  readonly type = ActionTypes.LOAD_FAILED
  constructor(public payload: string) {}
}

export type EmployeeActions =
  | LoadEmployee
  | LoadEmployeeSuccess
  | LoadEmployeeFailed
