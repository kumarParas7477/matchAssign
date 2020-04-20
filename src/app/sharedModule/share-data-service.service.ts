import { Injectable } from '@angular/core';
import { IProfile } from '../modules/public/model/public.model';
import { IRecomm } from '../modules/private/model/recomm.model';

@Injectable({
  providedIn: 'root'
})
export class ShareDataServiceService {
  data: any[];
  constructor() { }
  public saveData(data: any[]) {

    data.sort((a, b) => {
      return b.recommendationScore - a.recommendationScore;
    });
    this.data = data;
  }
  public getData(): any[] {
    return this.data;
  }




}
