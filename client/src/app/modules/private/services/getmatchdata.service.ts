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
      "https://cricapi.com/api/matches?apikey=ExyXddeiR5XiBjwe71RQeqDD6nr2"
    );
  }
  public getOldMatchdata(): Observable<any> {
    return this._http.get<any>(
      "https://cricapi.com/api/cricket?apikey=ExyXddeiR5XiBjwe71RQeqDD6nr2"
    );
  }
}
