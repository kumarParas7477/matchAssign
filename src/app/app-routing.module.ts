import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", loadChildren: "./modules/public/public.module#PublicModule" },
  {
    path: "public",
    loadChildren: "./modules/public/public.module#PublicModule"
  },
  {
    path: "private",
    loadChildren: "./modules/private/private.module#PrivateModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
