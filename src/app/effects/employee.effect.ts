import { Injectable } from "@angular/core"
import { Action } from "@ngrx/store"
import { Actions, Effect, ofType } from "@ngrx/effects"
import { of, Observable } from "rxjs"
import { pluck, map, catchError, switchMap } from "rxjs/operators"
import { EmployeeService } from "../services/employee.service"
import {
  ActionTypes,
  EmployeeActions,
  LoadEmployeeSuccess,
  LoadEmployeeFailed,
} from "../actions/employee.action"
import { IEmployee } from "../models/employee.model"

@Injectable()
export class EmployeeEffects {
  @Effect()
  loadEmployee$: Observable<Action> = this.actions$.pipe(
    ofType<EmployeeActions>(ActionTypes.LOAD_REQUEST),
    switchMap(() =>
      this.employeeService.get().pipe(
        pluck("data"),
        map((employees: IEmployee[]) => new LoadEmployeeSuccess(employees)),
        catchError((err: any) => of(new LoadEmployeeFailed(err.message)))
      )
    )
  )

  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService
  ) {}
}
