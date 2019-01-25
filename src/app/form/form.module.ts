import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormComponent } from "./form/form.component"
import { FormRoutingModule } from "./form-routing.module"

@NgModule({
  imports: [CommonModule, FormRoutingModule],
  declarations: [FormComponent],
})
export class FormModule {}
