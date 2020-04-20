import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PublicRoutingModule } from "./public-routing.module";
import { GetREgisteredUsersService } from './service/get-registered-users.service';
import { PublicGuardGuard } from "./service/public-guard.guard";
@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PublicRoutingModule
  ], providers: [GetREgisteredUsersService, PublicGuardGuard]
})
export class PublicModule { }
