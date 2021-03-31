import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import { FoodblogComponent } from './foodblog/foodblog.component';
import {CreateComponent} from './create/create.component';

import {AddComponent} from './add/add.component';
import {UpdateComponent} from './update/update.component';


const routes: Routes = [ {path:'login',component:LoginComponent},{path:"foodblog",component:FoodblogComponent},
{path:'home',component:HomeComponent},{path:'contact',component:ContactComponent},{path:'update',component:UpdateComponent},{path:'add',component:AddComponent},{path:'create',component:CreateComponent},{path:'',redirectTo:'foodblog',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
