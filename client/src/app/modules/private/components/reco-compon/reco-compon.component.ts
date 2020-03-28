import { Component, OnInit, Input } from '@angular/core';
import { IRecomm } from '../../model/recomm.model';
import { ShareDataServiceService } from '../../../../sharedModule/share-data-service.service';



@Component({
  selector: 'app-reco-compon',
  templateUrl: './reco-compon.component.html',
  styleUrls: ['./reco-compon.component.css']
})
export class RecoComponComponent implements OnInit {
  show: boolean = false;
  favourites: any[] = [];

  match: any[] = [];
  frequency: number[] = [];
  recomm: IRecomm = { match: {}, frequency: 0 }
  recommedation: IRecomm[] = [];
  constructor(private _shareService: ShareDataServiceService) { }

  ngOnInit() {
    this.favourites = [...this._shareService.getFavourites()];
    console.log(this.favourites);

    this.calculateFrequency();


  }

  calculateFrequency() {

    ;
  }


}
