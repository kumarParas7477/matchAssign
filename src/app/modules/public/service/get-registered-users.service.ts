import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProfile } from "../model/public.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GetREgisteredUsersService {
  constructor(private _http: HttpClient) { }

  public checkProfile(profile: any): Observable<IProfile[]> {
    console.log(profile);
    const headers = new HttpHeaders({ "content-Type": "application/json" });
    return this._http.post<IProfile[]>("http://localhost:8081/auth/v1/login", profile,
      { headers });
  }

  public createProfile(profile: IProfile): Observable<IProfile[]> {
    const headers = new HttpHeaders({ "content-Type": "application/json" });
    return this._http.post<IProfile[]>(
      'http://localhost:8081/api/v1/userservice/user',
      profile,
      { headers }
    );
  }
}
