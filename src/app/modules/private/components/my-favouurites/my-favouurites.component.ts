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

    });

  }
  getDate(name: string) {
    console.log(name);
    console.log(new Date(name).getMonth().toString());

    let todaydate = new Date(name).getDate() < 10 ? "0" + new Date(name).getDate().toString() : new Date(name).getDate().toString();
    let month = (new Date(name).getMonth() + 1) < 10 ? "0" + (new Date(name).getMonth() + 1).toString() : (new Date(name).getMonth() + 1).toString();
    let year = new Date(name).getFullYear();
    return (todaydate + "-" + month + "-" + year);
  }


}

