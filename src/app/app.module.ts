import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { HttpClientModule } from "@angular/common/http"
import { StoreModule } from "@ngrx/store"
import { EffectsModule } from "@ngrx/effects"
import { StoreDevtoolsModule } from "@ngrx/store-devtools"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { ListComponent } from "./list/list.component"

import { appReducer } from "./reducers/app.reducer"
import { EmployeeEffects } from "./effects/employee.effect"
import { StoreRouterConnectingModule } from "@ngrx/router-store"

@NgModule({
  declarations: [AppComponent, ListComponent, ListComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([EmployeeEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
    StoreDevtoolsModule.instrument({
      maxAge: 30,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
