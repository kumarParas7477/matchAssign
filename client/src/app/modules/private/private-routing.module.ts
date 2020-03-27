import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RecoComponComponent } from './components/reco-compon/reco-compon.component';

const routes: Routes = [
  {
    path: "",
    component: NavbarComponent, children: [
      { path: '', component: LandingPageComponent, }

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
