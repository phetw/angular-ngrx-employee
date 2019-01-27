import { ComponentFixture, TestBed } from "@angular/core/testing"
import { StoreModule, Store } from "@ngrx/store"
import { ListComponent } from "./list.component"

import { appReducer } from "../reducers/app.reducer"
import * as employeeAction from "../actions/employee.action"
import { IAppState } from "../state/app.state"
import { IEmployee } from "../models/employee.model"

describe("List Employee Component", () => {
  let component: ListComponent
  let fixture: ComponentFixture<ListComponent>
  let store: Store<IAppState>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(appReducer)],
      declarations: [ListComponent],
    })

    store = TestBed.get(Store)

    spyOn(store, "dispatch").and.callThrough()

    fixture = TestBed.createComponent(ListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should be created", () => {
    expect(component).toBeTruthy()
  })

  it("should dispatch an action to load employee when created", () => {
    const action = new employeeAction.LoadEmployee()
    expect(store.dispatch).toHaveBeenCalledWith(action)
  })

  it("should display a list of items after the data is loaded", () => {
    const employees: IEmployee[] = [
      { Id: "2", Firstname: "wasuwat", Lastname: "lim", Age: 22 },
    ]
    const action = new employeeAction.LoadEmployeeSuccess(employees)

    store.dispatch(action)

    component.employees$.subscribe(data => {
      expect(data.length).toBe(employees.length)
    })
  })
})
