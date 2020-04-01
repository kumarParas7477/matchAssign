import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
// import { PublicModule } from '../../Public/public.module';
import { GetmatchdataService } from '../../services/getmatchdata.service';
import { ShareDataServiceService } from '../../../../sharedModule/share-data-service.service';
import { GetREgisteredUsersService } from 'src/app/modules/public/service/get-registered-users.service';

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
  myFavourites: any[] = [];
  favourite: any[] = [];
  // tslint:disable-next-line:variable-name
  constructor(private _router: Router, private _matchdata: GetmatchdataService, private _getUser: GetREgisteredUsersService, private _shareService: ShareDataServiceService) { }

  ngOnInit() {
    this._matchdata.getNewMatchdata().subscribe((data: any) => {
      this.NewMatchData = [...data.matches];
      this._shareService.saveData(this.NewMatchData);
      this.send = true;
    });

    this._getUser.getProfiles().subscribe((user: any) => {
      user.map((userData: any) => {

        if (userData._id == sessionStorage.getItem('_id')) {
          this.myFavourites = [...userData.favourites];
          this._shareService.setMyfavourites(this.myFavourites);
        }

        userData.favourites.map((datas: any) => {
          if (datas.unique_id !== undefined)
            this.favourite.push(datas);
        })
      })
      this._shareService.setFavourites(this.favourite);

    })
  }

  logout() { sessionStorage.clear(); this._router.navigate(['/public']); }
  reload() { this._router.navigate(['/private']); }
  nav(route: string) {
    if (route == 'rec') { this._router.navigate(['private/recommend']); }
    else if (route == 'old') {
      this._router.navigate(['private/oldMatch']);
    }
    else {
      this._router.navigate(['private/myFavourites'])
    }
  }


}
