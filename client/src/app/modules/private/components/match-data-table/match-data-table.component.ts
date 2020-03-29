import { Component, OnInit, Input } from "@angular/core";
import { GetmatchdataService } from "../../services/getmatchdata.service";


@Component({
  selector: "app-match-data-table",
  templateUrl: "./match-data-table.component.html",
  styleUrls: ["./match-data-table.component.css"]
})
export class MatchDataTableComponent implements OnInit {
  @Input()
  NewMatchData: any;
  FilterData: any;
  _enteredtext: string;
  constructor(private _matchService: GetmatchdataService) { }

  ngOnInit() {
    this.FilterData = this.NewMatchData;
  }
  addToFavourites(match: any) {
    this._matchService.addToFavourites(sessionStorage.getItem('username'), match).subscribe((data: any) => {
      console.log(data);
    })
  }
  getDate(name: string) {
    return (new Date(name).getDate().toString() + '-' + new Date(name).getMonth().toString() + '-' + new Date(name).getFullYear().toString()).toString()
  }

  set enteredtext(newValue: string) {
    this._enteredtext = newValue;
    console.log(newValue);
    this.FilterData = this._enteredtext ? this.filter(this._enteredtext) : this.NewMatchData;
  }
  filter(filtertext: string) {
    // console.log(enteredtext);
    return (this.NewMatchData.filter((datas: any) =>
      (datas['team-1'].toLowerCase().indexOf(filtertext.toLowerCase()) !== -1) || (datas['team-2'].toLowerCase().indexOf(filtertext.toLowerCase()) !== -1)
    ))

  }
}
