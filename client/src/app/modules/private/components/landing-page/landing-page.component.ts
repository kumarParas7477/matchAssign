import { Component, OnInit, Input } from "@angular/core";
import { GetmatchdataService } from "../../services/getmatchdata.service";
import { ShareDataServiceService } from '../../../../sharedModule/share-data-service.service';


@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"]
})
export class LandingPageComponent implements OnInit {

  NewMatchData: any[] = [];
  tableView: boolean = true;
  calenderView: boolean = false;
  constructor(private _matchdata: GetmatchdataService, private _shareService: ShareDataServiceService) { }

  ngOnInit() {
    this.NewMatchData = this._shareService.getData();

    // this._matchdata.getNewMatchdata().subscribe((data: any) => {
    //   console.log(data);
    //   this.NewMatchData = [...data.matches];
    // });
  }
  setTableView() {
    this.tableView = true;
    this.calenderView = false;
  }
  setCalView() {
    this.tableView = false;
    this.calenderView = true;
  }

}
