import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RecoComponComponent } from './components/reco-compon/reco-compon.component';
import { OldMatchComponent } from './components/old-match/old-match.component';
import { PrivateguardGuard } from './services/privateguard.guard';
import { MyFavouuritesComponent } from './components/my-favouurites/my-favouurites.component';
const routes: Routes = [
  {
    path: "",
    component: NavbarComponent, canActivate: [PrivateguardGuard], children: [
      { path: '', component: LandingPageComponent, },
      { path: "recommend", component: RecoComponComponent },
      { path: 'oldMatch', component: OldMatchComponent },
      { path: 'myFavourites', component: MyFavouuritesComponent }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
