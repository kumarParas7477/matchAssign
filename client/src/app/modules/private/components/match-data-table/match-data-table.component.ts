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
  constructor(private _matchService: GetmatchdataService) { }

  ngOnInit() {
    console.log(this.NewMatchData[0]);
  }
  addToFavourites(match: any) {
    console.log(match);
    this._matchService.addToFavourites(sessionStorage.getItem('username'), match).subscribe((data: any) => {
      console.log(data);
    })
  }
}
