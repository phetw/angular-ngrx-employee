import { Component, OnInit } from "@angular/core"
import { Observable } from "rxjs"
import { Store, select } from "@ngrx/store"

import { IAppState } from "../state/app.state"
import { IEmployee } from "../models/employee.model"
import { LoadEmployee } from "../actions/employee.action"
import * as employeeSelector from "../selectors/employee.selector"

@Component({
  selector: "emp-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  loading$: Observable<boolean> = this.store.pipe(
    select(employeeSelector.loading)
  )
  employees$: Observable<IEmployee[]> = this.store.pipe(
    select(employeeSelector.data)
  )
  error$: Observable<IEmployee[]> = this.store.pipe(
    select(employeeSelector.error)
  )

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.getEmployee()
  }

  getEmployee(): void {
    this.store.dispatch(new LoadEmployee())
  }
}
