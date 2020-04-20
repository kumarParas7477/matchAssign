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
    const headers = new HttpHeaders({ 'content-Type': 'application/json', 'Authorization': sessionStorage.getItem('Authorization') });
    return this._http.get<any>(
      "http://localhost:8082/api/v1/match", { headers }
    );
  }


  // public getOldMatchdata(): Observable<any> {
  //   return this._http.get<any>('http://localhost:3000/OldMatchData');
  // }

  // public getStats(Unique_id: number): Observable<any> {

  //   return this._http.get<any>(`http://localhost:3000/stats/${Unique_id}`);
  // }

  // public deleteFavourite(id: any, match: any): Observable<any> {
  //   const headers = new HttpHeaders({ 'content-Type': 'application/json' });
  //   console.log(match.unique_id);
  //   return this._http.delete<any>(`http://localhost:3000/users/${id}`, match.unique_id).
  //     pipe(tap(data => console.log(data)));
  // }

  public addToFavourites(item: any): Observable<any> {

    return this._http.get<any>(`http://localhost:8082/api/v1/match/markFavorite/${sessionStorage.getItem('username')}/${item.unique_id}`);
  }

  public getMyFavourites(): Observable<any> {

    return this._http.get<any>(`http://localhost:8082/api/v1/match/favoriteMatches/${sessionStorage.getItem('username')}`);
  }

  public getRecommendation(): Observable<any> {
    return this._http.get<any>(`http://localhost:8083/api/v1/recommendation/matchList/${sessionStorage.getItem('username')}`)
  }




}