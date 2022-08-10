import { Component, NgModule } from "@angular/core";
import { RouterModule , Routes } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { DashboardComponent } from "./user/dashboard/dashboard.component";
import { LoginComponent } from "./user/login/login.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { RegisterComponent } from "./user/register/register.component";

 
const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'profile', component:ProfileComponent},
  {path: '**', component:DashboardComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }