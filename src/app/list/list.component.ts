import { Component, OnInit } from "@angular/core"
import { Observable } from "rxjs"
import { Employee } from "../models/employee.model"
import { Store } from "@ngrx/store"
import { ActionTypes } from "../actions/employee.action"
import { IEmployeeState } from "../reducers/employee.reducer"

@Component({
  selector: "emp-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  loading$: Observable<boolean> = this.store.select(
    state => state.employee.loading
  )
  employees$: Observable<Employee[]> = this.store.select(
    state => state.employee.data
  )
  error$: Observable<Employee[]> = this.store.select(
    state => state.employee.error
  )

  constructor(private store: Store<{ employee: IEmployeeState }>) {}

  ngOnInit() {
    this.store.dispatch({ type: ActionTypes.LOAD_REQUEST })
  }
}
