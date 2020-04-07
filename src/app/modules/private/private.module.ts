import { NgModule } from "@angular/core";
import 'flatpickr/dist/flatpickr.css';
import { CommonModule } from "@angular/common";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PrivateRoutingModule } from "./private-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatchDataTableComponent } from './components/match-data-table/match-data-table.component';
import { RecoComponComponent } from "./components/reco-compon/reco-compon.component";

import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";

import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { FlatpickrModule } from 'angularx-flatpickr';
import { DemoComponent } from "./components/calendar-component/calendar-component.component";
import { DemoUtilsModule } from "./components/calendar-util/calendar-utils.module";
import { OldMatchComponent } from './components/old-match/old-match.component';
import { MyFavouuritesComponent } from './components/my-favouurites/my-favouurites.component';



@NgModule({
  declarations: [LandingPageComponent, NavbarComponent, MatchDataTableComponent, RecoComponComponent, DemoComponent, OldMatchComponent, MyFavouuritesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrivateRoutingModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    DemoUtilsModule
  ]

})
export class PrivateModule { }
