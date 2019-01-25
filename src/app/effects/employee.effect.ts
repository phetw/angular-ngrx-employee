import { Injectable } from "@angular/core"
import { Action } from "@ngrx/store"
import { Actions, Effect, ofType } from "@ngrx/effects"
import { of, Observable } from "rxjs"
import { pluck, map, catchError, switchMap } from "rxjs/operators"
import { EmployeeService } from "../services/employee.service"
import { ActionTypes } from "../actions/employee.action"

@Injectable()
export class EmployeeEffects {
  @Effect()
  loadEmployee$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.LOAD_REQUEST),
    switchMap(() =>
      this.employeeService.get().pipe(
        pluck("data"),
        map(employees => ({
          type: ActionTypes.LOAD_SUCCESS,
          payload: employees,
        })),
        catchError(err => of({ type: ActionTypes.LOAD_FAILED, payload: err }))
      )
    )
  )

  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService
  ) {}
}
