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
  public addToFavourites(id: any, match: Object): Observable<any> {
    const headers = new HttpHeaders({ 'content-Type': 'application/json' });
    console.log(match);
    return this._http.patch<any>(`http://localhost:3000/users/${id}`, match, { headers }).pipe(tap(data => console.log(data)));
  }
  public getStats(Unique_id: number): Observable<any> {

    return this._http.get<any>(`http://localhost:3000/stats/${Unique_id}`);
  }

  public deleteFavourite(id: any, match: any): Observable<any> {
    const headers = new HttpHeaders({ 'content-Type': 'application/json' });
    console.log(match.unique_id);
    return this._http.delete<any>(`http://localhost:3000/users/${id}`, match.unique_id).
      pipe(tap(data => console.log(data)));
  }
}