import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { PublicGuardGuard } from './service/public-guard.guard';

const routes: Routes = [
  { path: "", component: LoginComponent, canActivate: [PublicGuardGuard] },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
