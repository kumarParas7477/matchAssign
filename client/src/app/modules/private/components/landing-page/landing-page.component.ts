import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GetmatchdataService } from "../services/getmatchdata.service";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"]
})
export class LandingPageComponent implements OnInit {
  NewMatchData: any[] = [];
  constructor(private _matchdata: GetmatchdataService) { }

  ngOnInit() {
    this._matchdata.getNewMatchdata().subscribe((data: any) => {
      console.log(data);
      this.NewMatchData = [...data.matches];
    });
  }
}
