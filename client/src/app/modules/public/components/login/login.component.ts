import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IProfile } from "../../model/public.model";
import { GetREgisteredUsersService } from "../../service/get-registered-users.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  constructor(
    private _router: Router,
    private fb: FormBuilder,
    // tslint:disable-next-line:align
    private _service: GetREgisteredUsersService
  ) {}

  // tslint:disable-next-line:variable-name
  username: string;
  password: string;
  LoginForm: FormGroup;
  // flag: number;
  // tslint:disable-next-line:variable-name

  profiles: IProfile[];
  ngOnInit() {
    // tslint:disable-next-line: whitespace
    this._service.getProfiles().subscribe((data: IProfile[]) => {
      this.profiles = data;

      // tslint:disable-next-line:align
    });

    this.LoginForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", Validators.required]
    });
  }

  disableLogin() {
    if (
      this.LoginForm.value.username == "" ||
      this.LoginForm.value.password == ""
    ) {
      return true;
    } else {
      return false;
    }
  }
  login() {
    this.username = this.LoginForm.value.username.toLowerCase();
    // this.flag = 0;
    // tslint:disable-next-line:align
    this.profiles.map(data => {
      if (
        data.Username.toLocaleLowerCase() === this.username &&
        data.password === this.LoginForm.value.password
      ) {
        this._router.navigate(["./private"]);
      } else {
        alert("Invalid Credentials");
      }
    });
  }
}
