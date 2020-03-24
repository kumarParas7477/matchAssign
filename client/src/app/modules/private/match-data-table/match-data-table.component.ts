import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-match-data-table",
  templateUrl: "./match-data-table.component.html",
  styleUrls: ["./match-data-table.component.css"]
})
export class MatchDataTableComponent implements OnInit {
  @Input()
  NewMatchData: any;
  constructor() { }

  ngOnInit() {
    console.log(this.NewMatchData[0]);
  }
}
