import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get(
      "https://rocky-brushlands-79767.herokuapp.com/api/employee"
    )
  }
}
