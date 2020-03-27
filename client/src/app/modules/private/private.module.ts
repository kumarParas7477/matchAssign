import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PrivateRoutingModule } from "./private-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatchDataTableComponent } from './components/match-data-table/match-data-table.component';
import { RecoComponComponent } from "./components/reco-compon/reco-compon.component";
import { CalenderComponent } from './components/calender/calender.component';

@NgModule({
  declarations: [LandingPageComponent, NavbarComponent, MatchDataTableComponent, RecoComponComponent, CalenderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
