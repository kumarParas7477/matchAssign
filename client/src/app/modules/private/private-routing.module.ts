import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { NavbarComponent } from "./navbar/navbar.component";

const routes: Routes = [
  {
    path: "",
    component: NavbarComponent,
    children: [{ path: "", component: LandingPageComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule {}
