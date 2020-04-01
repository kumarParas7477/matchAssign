import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { GetmatchdataService } from "../../services/getmatchdata.service";
import { ShareDataServiceService } from '../../../../sharedModule/share-data-service.service';



@Component({
  selector: "app-match-data-table",
  templateUrl: "./match-data-table.component.html",
  styleUrls: ["./match-data-table.component.css"]
})
export class MatchDataTableComponent implements OnInit {
  @Input()
  NewMatchData: any[] = [];
  myFavourites: any[] = [];
  FilterData: any[] = [];
  _enteredtext: string;
  constructor(private _matchService: GetmatchdataService, private _shareservice: ShareDataServiceService) { }

  ngOnInit() {


  }
  ngOnChanges(changes: SimpleChanges) {

    this.myFavourites = this._shareservice.getMyfavourites();
    this.NewMatchData.map((a: any) => {
      this.myFavourites.map((data: any) => {
        if (data.unique_id == a.unique_id) {
          a.added = true;
        }
      })
      this.FilterData.push(a);
    })
  }
  addToFavourites(match: any) {
    this._matchService.addToFavourites(sessionStorage.getItem('_id'), match).subscribe((data: any) => {


    })
  }

  getDate(name: string) {
    return (new Date(name).getDate().toString() + '-' + new Date(name).getMonth().toString() + '-' + new Date(name).getFullYear().toString()).toString()
  }

  set enteredtext(newValue: string) {
    this._enteredtext = newValue;

    this.FilterData = this._enteredtext ? this.filter(this._enteredtext) : this.NewMatchData;
  }
  filter(filtertext: string) {
    // console.log(enteredtext);
    return (this.NewMatchData.filter((datas: any) =>
      (datas['team-1'].toLowerCase().indexOf(filtertext.toLowerCase()) !== -1) || (datas['team-2'].toLowerCase().indexOf(filtertext.toLowerCase()) !== -1)
    ))

  }
}
