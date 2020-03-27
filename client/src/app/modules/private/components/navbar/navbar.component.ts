import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
// import { PublicModule } from '../../Public/public.module';
import { GetmatchdataService } from '../../services/getmatchdata.service';
import { ShareDataServiceService } from '../../../../sharedModule/share-data-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  send: boolean = false;
  NewMatchData: any[] = [];
  FilterData: any[] = [];
  _enteredtext: string;
  // tslint:disable-next-line:variable-name
  constructor(private _router: Router, private _matchdata: GetmatchdataService, private _shareService: ShareDataServiceService) { }

  ngOnInit() {
    // $(".navbar-brand").css("animate bounce");
    this._matchdata.getNewMatchdata().subscribe((data: any) => {
      console.log(data);
      this.NewMatchData = [...data.matches];
      this._shareService.saveData(this.NewMatchData);
      this.send = true;
    });
  }

  logout() {
    // console.log(this.datas1);
    localStorage.clear();
    console.clear();

    this._router.navigate(['/public']);
  }

  naviToRec() {
    this._router.navigate(['/private/recommend']);

  }

}
