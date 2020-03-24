import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProfile } from "../model/public.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GetREgisteredUsersService {
  constructor(private _http: HttpClient) {}

  public getProfiles(): Observable<IProfile[]> {
    return this._http.get<IProfile[]>("http://localhost:3000/users");
  }

  public createProfile(profile: IProfile): Observable<IProfile[]> {
    const headers = new HttpHeaders({ "content-Type": "application/json" });
    return this._http.put<IProfile[]>(
      `http://localhost:3000/createProfile`,
      profile,
      { headers }
    );
  }
}
