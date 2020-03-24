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
    localStorage.clear();

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
  login() {
    this.username = this.LoginForm.value.username.toLowerCase();
    // this.flag = 0;
    // tslint:disable-next-line:align
    this.profiles.map(data => {
      if (
        data.username.toLocaleLowerCase() === this.username &&
        data.password === this.LoginForm.value.password
      ) {
        // this.flag = 1;
        // if (data.isActive) {
        // localStorage.setItem('data', JSON.stringify(data));
        // localStorage.setItem('role', `${data.role.toLowerCase()}`);
        this._router.navigate(["./register"]);
      } else alert("Invalid Credentials");
    });
  }
}
