import { Action } from "@ngrx/store"

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
  constructor(public payload: { data: []; loading: boolean }) {}
}

export class LoadEmployeeFailed implements Action {
  readonly type = ActionTypes.LOAD_FAILED
  constructor(public payload: { loading: boolean; error: any }) {}
}

export type EmployeeActions =
  | LoadEmployee
  | LoadEmployeeSuccess
  | LoadEmployeeFailed
