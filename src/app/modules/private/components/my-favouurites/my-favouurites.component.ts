import { Component, OnInit } from '@angular/core';

import { ShareDataServiceService } from '../../../../sharedModule/share-data-service.service';
import { GetmatchdataService } from '../../services/getmatchdata.service';

@Component({
  selector: 'app-my-favouurites',
  templateUrl: './my-favouurites.component.html',
  styleUrls: ['./my-favouurites.component.css']
})
export class MyFavouuritesComponent implements OnInit {
  myFavourites: any = [];
  constructor(private _matchService: GetmatchdataService) { }

  ngOnInit() {
    this._matchService.getMyFavourites().subscribe((data: any) => {
      this.myFavourites = [...data];
      console.log(data);
    });

  }
  getDate(name: string) {
    return (new Date(name).getDate().toString() + '-' + new Date(name).getMonth().toString() + '-' + new Date(name).getFullYear().toString()).toString();
  }

}

