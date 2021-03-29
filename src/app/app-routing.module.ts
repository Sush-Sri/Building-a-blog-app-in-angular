import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import { FoodblogComponent } from './foodblog/foodblog.component';


const routes: Routes = [ {path:'login',component:LoginComponent},{path:"foodblog",component:FoodblogComponent},
{path:'home',component:HomeComponent},{path:'contact',component:ContactComponent},{path:'',redirectTo:'foodblog',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
