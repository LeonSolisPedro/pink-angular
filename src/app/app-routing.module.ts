import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component"
import { EmptyBlockComponent } from "./empty-block/empty-block.component"
import { LoginComponent } from "./login/login.component"

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "aboutus", component: EmptyBlockComponent },
  { path: "services", component: EmptyBlockComponent },
  { path: "contact", component: EmptyBlockComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
