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
  usernameresolve: any;
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


    this.LoginForm = this.fb.group({
      userId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get primaryEmail() {
    return this.LoginForm.get('userId');
  }
  // validateEmail(){
  //   if(this.LoginForm.value.userId.)
  // }
  disableLogin() {
    if (
      this.LoginForm.value.userId == '' ||
      this.LoginForm.value.password == ''
    ) {
      return true;
    } else {
      return false;
    }
  }
  login() {
    this.usernameresolve = this.LoginForm.value.userId.split('@');

    this.LoginForm.value.userId = this.usernameresolve[0].toLocaleLowerCase() + '@' + this.usernameresolve[1].toLocaleLowerCase()
    sessionStorage.setItem('username', this.LoginForm.value.userId);
    this._service.checkProfile(this.LoginForm.value).subscribe((data: any) => {
      if (data.token != undefined) {
        console.log(data.token)
        sessionStorage.setItem("Authorization", data.token);
        sessionStorage.setItem('userId', this.LoginForm.value.userId);
        this._router.navigate(['/private']);
      }
      else {
        alert("Invalid credentials");
      }
    })


  }




}
