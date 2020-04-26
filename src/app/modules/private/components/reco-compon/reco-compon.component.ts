import { Component, OnInit, } from '@angular/core';
import { ShareDataServiceService } from '../../../../sharedModule/share-data-service.service';
import { GetmatchdataService } from '../../services/getmatchdata.service';





@Component({
  selector: 'app-reco-compon',
  templateUrl: './reco-compon.component.html',
  styleUrls: ['./reco-compon.component.css']
})
export class RecoComponComponent implements OnInit {
  show: boolean = false;
  name: string = sessionStorage.getItem('userId').toString();
  recommendations: any[] = [];
  recommendation: any[] = [];
  constructor(private _matchService: GetmatchdataService, private _shareService: ShareDataServiceService) { }

  ngOnInit() {
    this.recommendations = this._shareService.getData();

    this.recommendations.map((data: any) => {
      if (data.favoriteList.indexOf(this.name) !== -1) {
        data.added = true;
      } else { data.added = false; }
      this.recommendation.push(data);
      if (this.recommendations.length == this.recommendation.length) {
        this.show = true;
      }

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
  addToFavourites(match: any, index: number) {
    this._matchService.addToFavourites(match).subscribe((data: any) => {
      this.recommendation[index].added = true;
    }, (error: any) => alert("Not Added"));
  }

  ascending() {
    this.recommendation.sort((a, b) => {
      return a.recommendationScore - b.recommendationScore;
    })
  }
  descending() {
    this.recommendation.sort((a, b) => {
      return b.recommendationScore - a.recommendationScore;
    })

  }


}
