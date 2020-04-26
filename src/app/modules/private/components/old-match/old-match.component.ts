import { Component, OnInit } from '@angular/core';
import { GetmatchdataService } from '../../services/getmatchdata.service';

@Component({
  selector: 'app-old-match',
  templateUrl: './old-match.component.html',
  styleUrls: ['./old-match.component.css']
})
export class OldMatchComponent implements OnInit {
  OldMatchdata: any[] = [];
  match: any;
  stats: boolean = false;
  FilterData: any[] = [];
  _enteredtext: string;
  constructor(private _getData: GetmatchdataService) { }

  ngOnInit() {
    // this._getData.getOldMatchdata().subscribe((matches: any) => {
    //   console.log(matches);
    //   
    //     this.OldMatchdata = [...matches.data];
    //     this.FilterData = this.OldMatchdata;
    //   

    // })
  }

  // FindStats(item: any) {
  //   this._getData.getStats(item.unique_id).subscribe((data: any) => {
  //     this.match = data;
  // this.stats = true;
  //   })

  // }


  getDate(name: string) {

    let todaydate = new Date(name).getDate() < 10 ? "0" + new Date(name).getDate().toString() : new Date(name).getDate().toString();
    let month = (new Date(name).getMonth() + 1) < 10 ? "0" + (new Date(name).getMonth() + 1).toString() : (new Date(name).getMonth() + 1).toString();
    let year = new Date(name).getFullYear();
    return (todaydate + "-" + month + "-" + year);
  }

  set enteredtext(newValue: string) {
    this._enteredtext = newValue;
    console.log(newValue);
    this.FilterData = this._enteredtext ? this.filter(this._enteredtext) : this.OldMatchdata;
  }
  filter(filtertext: string) {
    // console.log(enteredtext);
    return (this.OldMatchdata.filter((datas: any) =>
      (datas['team-1'].toLowerCase().indexOf(filtertext.toLowerCase()) !== -1) || (datas['team-2'].toLowerCase().indexOf(filtertext.toLowerCase()) !== -1)
    ))

  }

}
