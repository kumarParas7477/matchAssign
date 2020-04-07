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
  myfavourite: any[] = []
  FilterData: any[] = [];
  _enteredtext: string;
  show: boolean = false;
  constructor(private _matchService: GetmatchdataService, private _shareservice: ShareDataServiceService) { }

  ngOnInit() {
    this._matchService.getMyFavourites().subscribe((data: any) => {
      this.myfavourite = [...data];
      this.NewMatchData.map((a: any) => {
        this.myfavourite.map((data: any) => {
          if (data.unique_id == a.unique_id) {
            a.added = true;
          }
        })
        this.FilterData.push(a);
        if (this.FilterData == this.NewMatchData) {
          this.show = true;
        }
      })
      console.log(this.NewMatchData);
      console.log(this.FilterData);
      console.log(this.myfavourite);
    })


    console.log(this.FilterData);
  }


  addToFavourites(match: any) {
    console.log(match);
    this._matchService.addToFavourites(match).subscribe((data: any) => {
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
    return (this.FilterData.filter((datas: any) =>
      (datas['team-1'].toLowerCase().indexOf(filtertext.toLowerCase()) !== -1) || (datas['team-2'].toLowerCase().indexOf(filtertext.toLowerCase()) !== -1)
    ))

  }
}
