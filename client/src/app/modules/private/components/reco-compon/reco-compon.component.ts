import { Component, OnInit, Input } from '@angular/core';
import { IRecomm } from '../../model/recomm.model';
import { ShareDataServiceService } from '../../../../sharedModule/share-data-service.service';



@Component({
  selector: 'app-reco-compon',
  templateUrl: './reco-compon.component.html',
  styleUrls: ['./reco-compon.component.css']
})
export class RecoComponComponent implements OnInit {
  fr: any[] = [];
  show: boolean = false;
  visited: number;
  count: number
  favourites: any[] = [];
  recommend: IRecomm = { match: {}, frequency: 0 };
  recommendations: IRecomm[] = [];
  constructor(private _shareService: ShareDataServiceService) { }

  ngOnInit() {
    this.favourites = [...this._shareService.getFavourites()];
    console.log(this.favourites);
    this.calculateFrequency();

  }

  calculateFrequency() {
    this.visited = -1;
    for (let i = 0; i < this.favourites.length; i++) {
      this.count = 1;
      for (let j = i + 1; j < this.favourites.length; j++) {
        if (this.favourites[i].unique_id == this.favourites[j].unique_id) {
          this.count = this.count + 1;
          this.fr[j] = this.visited;
        }
      }
      if (this.fr[i] !== this.visited) {
        this.fr[i] = this.count;
      }
    }
    for (let i = 0; i < this.fr.length; i++) {
      if (this.fr[i] !== this.visited) {
        this.recommend.match = this.favourites[i];
        this.recommend.frequency = this.fr[i];

      }
      this.recommendations.push(this.recommend);
    }
    console.log(this.recommendations);
    this.recommendations.sort((a, b) => {
      return b.frequency - a.frequency;
    })
    console.log(this.recommendations);
    if (this.recommendations.length > 5) {
      this.recommendations.splice(0, 5);
    }
    this.show = true;



  }


}
