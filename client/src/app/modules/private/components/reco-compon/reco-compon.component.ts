import { Component, OnInit, Input } from '@angular/core';
import { IRecomm } from '../../model/recomm.model';
import { ShareDataServiceService } from '../../../../sharedModule/share-data-service.service';
import { GetREgisteredUsersService } from '../../../public/service/get-registered-users.service';


@Component({
  selector: 'app-reco-compon',
  templateUrl: './reco-compon.component.html',
  styleUrls: ['./reco-compon.component.css']
})
export class RecoComponComponent implements OnInit {

  MatchData: any
  match: any;
  Index: number = 0;
  favourites: any[] = [];
  recommend: IRecomm = { match: {}, frequency: 0 }
  recommendations: IRecomm[] = []
  constructor(private _shareService: GetREgisteredUsersService) { }

  ngOnInit() {
    this.MatchData = this._shareService.getProfiles();
    this.MatchData.map((match: any) => {
      this.match = this.recommendations.filter((data: IRecomm) => data.match == match);
      if (this.match) {
        this.Index = this.recommendations.findIndex(this.match);
        this.recommendations[this.Index].frequency++;
      }
      else {
        this.recommend.match = match;
        this.recommend.frequency = 0;
        this.recommendations.push(this.recommend);
      }
    })
    console.log(this.recommendations.slice(0, 2));
  }

}
