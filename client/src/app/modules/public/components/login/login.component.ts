import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { IProfile } from '../../model/public.model';
import { GetREgisteredUsersService } from '../../service/get-registered-users.service';
import { ShareDataServiceService } from '../../../../sharedModule/share-data-service.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  constructor(
    private _router: Router,
    private fb: FormBuilder,
    // tslint:disable-next-line:align
    private _service: GetREgisteredUsersService,
    private _sharedService: ShareDataServiceService
  ) { }

  // tslint:disable-next-line:variable-name
  username: string;
  password: string;
  LoginForm: FormGroup;

  notlogin: number = 0;
  // flag: number;
  // tslint:disable-next-line:variable-name

  profiles: IProfile[];
  ngOnInit() {
    sessionStorage.clear();

    // tslint:disable-next-line: whitespace
    this._service.getProfiles().subscribe((data: IProfile[]) => {
      this.profiles = data;

      this._sharedService.saveData(this.profiles);

      // tslint:disable-next-line:align
    });

    this.LoginForm = this.fb.group({
      username: ['', [Validators.required, EmailValidator]],
      password: ['', Validators.required]
    });
  }

  disableLogin() {
    if (
      this.LoginForm.value.username == '' ||
      this.LoginForm.value.password == ''
    ) {
      return true;
    } else {
      return false;
    }
  }
  login() {

    this.username = this.LoginForm.value.username;

    this.profiles.map((data: any) => {
      if (
        data.Username.split('@')[0].toLowerCase() == this.LoginForm.value.username.split('@')[0].toLowerCase() &&
        data.Username.split('@')[1] == this.LoginForm.value.username.split('@')[1] &&
        data.password == this.LoginForm.value.password
      ) {
        sessionStorage.setItem('username', this.username);
        this._router.navigate(['/private']);
      }
      else {

        this.notlogin = this.notlogin + 1;
      }
      if (this.notlogin == this.profiles.length) {
        alert("Invalid Credentials");
      }


    })

  }
}
