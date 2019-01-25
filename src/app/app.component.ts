import { Component } from "@angular/core"

@Component({
  selector: "emp-root",
  template: `
    <button routerLink="/">List employee</button>
    <button routerLink="/form">Add employee</button>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {}
