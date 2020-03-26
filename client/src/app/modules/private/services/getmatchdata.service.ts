import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: "root"
})
export class GetmatchdataService {
  constructor(private _http: HttpClient) { }
  public getNewMatchdata(): Observable<any> {
    return this._http.get<any>(
      "http://localhost:3000/NewMatchData"
    );
  }
  public getOldMatchdata(): Observable<any> {
    return this._http.get<any>('http://localhost:3000/OldMatchData');
  }
  public addToFavourites(username: string, match: Object): Observable<any> {
    const headers = new HttpHeaders({ 'content-Type': 'application/json' });

    console.log(match);
    return this._http.patch<any>(`http://localhost:3000/users/${username}`, match, { headers }).pipe(tap(data => console.log(data)));


  }
}