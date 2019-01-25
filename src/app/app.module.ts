import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { HttpClientModule } from "@angular/common/http"
import { StoreModule } from "@ngrx/store"
import { EffectsModule } from "@ngrx/effects"
import { StoreDevtoolsModule } from "@ngrx/store-devtools"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { ListComponent } from "./list/list.component"

import { employeeReducer } from "./reducers/employee.reducer"
import { EmployeeEffects } from "./effects/employee.effect"

@NgModule({
  declarations: [AppComponent, ListComponent, ListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ employee: employeeReducer }),
    EffectsModule.forRoot([EmployeeEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 30,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
