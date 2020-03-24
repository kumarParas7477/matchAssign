import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as $ from "jquery";
// import { PublicModule } from '../../Public/public.module';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  role: string;
  // tslint:disable-next-line:variable-name
  constructor(private _router: Router) {}

  ngOnInit() {
    // $(".navbar-brand").css("animate bounce");
  }

  logout() {
    // console.log(this.datas1);
    localStorage.clear();
    console.clear();

    this._router.navigate(["/public"]);
  }
  reload() {}
}
