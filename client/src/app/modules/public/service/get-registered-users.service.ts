import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProfile } from "../model/public.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GetREgisteredUsersService {
  constructor(private _http: HttpClient) {}

  public getProfiles(): Observable<IProfile[]> {
    return this._http.get<IProfile[]>("http://localhost:3000/users");
  }
}
