import { Component, OnInit, Input } from "@angular/core";
import { GetmatchdataService } from "../../services/getmatchdata.service";
import { ShareDataServiceService } from '../../../../sharedModule/share-data-service.service';


@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"]
})
export class LandingPageComponent implements OnInit {
  @Input()
  NewMatchData: any[] = [];
  constructor(private _matchdata: GetmatchdataService, private _shareService: ShareDataServiceService) { }

  ngOnInit() {
    // this._matchdata.getNewMatchdata().subscribe((data: any) => {
    //   console.log(data);
    //   this.NewMatchData = [...data.matches];
    // });
  }
}
