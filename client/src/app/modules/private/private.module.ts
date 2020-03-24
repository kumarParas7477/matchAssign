import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PrivateRoutingModule } from "./private-routing.module";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [LandingPageComponent, NavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule {}
