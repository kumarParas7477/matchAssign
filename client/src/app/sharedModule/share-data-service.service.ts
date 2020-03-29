import { Injectable } from '@angular/core';
import { IProfile } from '../modules/public/model/public.model';
import { IRecomm } from '../modules/private/model/recomm.model';

@Injectable({
  providedIn: 'root'
})
export class ShareDataServiceService {
  Users: IProfile[];
  favourites: any[] = []
  recomm: IRecomm = { match: Object, frequency: 0 }
  recommedation: IRecomm[] = [];
  constructor() { }
  public saveData(data: IProfile[]): boolean {
    this.Users = data;
    return true;
  }
  public getData(): IProfile[] {
    return this.Users;
  }
  public setFavourites(favourites: any[]) {
    console.log("Paras");
    this.favourites = [...favourites];

    const groupByAge = this.favourites.reduce((acc, it) => {
      acc[it.unique_id] = acc[it.unique_id] + 1 || 1;
      return acc;
    }, {});

    for (let key in groupByAge) {
      if (groupByAge.hasOwnProperty(key)) {
        if (key !== 'undefined') {

          this.recomm.match = this.favourites.filter(match => match['unique_id'] == parseInt(key))[0];
          this.recomm.frequency = groupByAge[key];
          this.recommedation.push(this.recomm);

        }
      }
    }
    this.recommedation.sort((a, b) => {
      return b.frequency - a.frequency;
    })

  }

  public getFavourites(): any[] {
    return this.recommedation;
  }
}
