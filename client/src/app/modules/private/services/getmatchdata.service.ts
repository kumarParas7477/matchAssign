import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GetmatchdataService {
  constructor(private _http: HttpClient) {}
  public getNewMatchdata(): Observable<any> {
    return this._http.get<any>(
      "https://cricapi.com/api/matches?apikey=[Your_API_Key]"
    );
  }
  public getOldMatchdata(): Observable<any> {
    return this._http.get<any>(
      "https://cricapi.com/api/cricket?apikey=[Your_API_Key]"
    );
  }
}
