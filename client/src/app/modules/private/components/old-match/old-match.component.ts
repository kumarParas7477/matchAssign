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
  stats: any
  FilterData: any[] = [];
  _enteredtext: string;
  constructor(private _getData: GetmatchdataService) { }

  ngOnInit() {
    this._getData.getOldMatchdata().subscribe((matches: any) => {
      console.log(matches);
      if (matches.data[0].title !== 'No Match in progress..') {
        this.OldMatchdata = [...matches.data];
        this.FilterData = this.OldMatchdata;
      }

    })
  }

  FindStats(item: any) {
    this._getData.getStats(item.unique_id).subscribe((data: any) => {
      this.match = data;
    })

  }


  getDate(name: string) {
    return (new Date(name).getDate().toString() + '-' + new Date(name).getMonth().toString() + '-' + new Date(name).getFullYear().toString()).toString()
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
