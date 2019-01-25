import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { ListComponent } from "./list/list.component"

const routes: Routes = [
  {
    path: "",
    component: ListComponent,
  },
  {
    path: "form",
    loadChildren: "./form/form.module#FormModule",
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full",
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
