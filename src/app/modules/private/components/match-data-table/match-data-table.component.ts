import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { GetmatchdataService } from '../../services/getmatchdata.service';
import { ShareDataServiceService } from '../../../../sharedModule/share-data-service.service';
@Component({
  selector: 'app-match-data-table',
  templateUrl: './match-data-table.component.html',
  styleUrls: ['./match-data-table.component.css']
})
export class MatchDataTableComponent implements OnInit {

  @Input()
  NewMatchData: any[] = [];
  myfavourite: any[] = [];
  FilterData: any[] = [];
  _enteredtext: string;
  name: string = sessionStorage.getItem('userId').toString();
  show = false;
  constructor(private _matchService: GetmatchdataService) { }

  ngOnInit() {

    this.NewMatchData.map((data: any) => {
      if (data.favoriteList.indexOf(this.name) !== -1) {
        data.added = true;
      } else { data.added = false; }

      this.FilterData.push(data);
      if (this.FilterData.length === this.NewMatchData.length) {
        this.show = true;
      }
    });


  }
  addToFavourites(match: any, index: number) {
    this._matchService.addToFavourites(match).subscribe((data: any) => {
      console.log(data);
      this.FilterData[index].added = true;
      console.log(this.FilterData[index]);
    });

  }


  getDate(name: string) {
    return (new Date(name).getDate().toString() + '-' + new Date(name).getMonth().toString() + '-' + new Date(name).getFullYear().toString()).toString();
  }

  set enteredtext(newValue: string) {
    this._enteredtext = newValue;

    this.FilterData = this._enteredtext ? this.filter(this._enteredtext) : this.NewMatchData;
  }
  filter(filtertext: string) {
    // console.log(enteredtext);
    return (this.FilterData.filter((datas: any) =>
      (datas['team-1'].toLowerCase().indexOf(filtertext.toLowerCase()) !== -1) || (datas['team-2'].toLowerCase().indexOf(filtertext.toLowerCase()) !== -1)
    ));

  }
}
