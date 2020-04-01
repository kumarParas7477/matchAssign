import { Component, OnInit } from '@angular/core';

import { ShareDataServiceService } from '../../../../sharedModule/share-data-service.service';
import { GetmatchdataService } from '../../services/getmatchdata.service';

@Component({
  selector: 'app-my-favouurites',
  templateUrl: './my-favouurites.component.html',
  styleUrls: ['./my-favouurites.component.css']
})
export class MyFavouuritesComponent implements OnInit {
  myFavourites: any = []
  constructor(private _dataService: ShareDataServiceService, private _matchService: GetmatchdataService) { }

  ngOnInit() {
    this.myFavourites = this._dataService.getMyfavourites();
    console.log(this.myFavourites);

  }
  getDate(name: string) {
    return (new Date(name).getDate().toString() + '-' + new Date(name).getMonth().toString() + '-' + new Date(name).getFullYear().toString()).toString()
  }
  removeFromFavourites(match: any) {
    this._matchService.deleteFavourite(sessionStorage.getItem('_d'), match).subscribe((data: any) => {

    })
  };
}
