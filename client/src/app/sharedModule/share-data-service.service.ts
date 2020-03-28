import { Injectable } from '@angular/core';
import { IProfile } from '../modules/public/model/public.model';

@Injectable({
  providedIn: 'root'
})
export class ShareDataServiceService {
  Users: IProfile[];
  favourites: any[] = []
  constructor() { }
  public saveData(data: IProfile[]): boolean {
    this.Users = data;
    return true;
  }
  public getData(): IProfile[] {
    return this.Users;
  }
  public setFavourites(favourites: any[]) {
    console.log(this.favourites);
    this.favourites = [...favourites];
  }
  public getFavourites(): any[] {
    return this.favourites;
  }
}
