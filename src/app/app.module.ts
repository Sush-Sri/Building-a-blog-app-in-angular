import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodblogComponent } from './foodblog/foodblog.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {HttpClientModule} from '@angular/common/http';

import { CreateComponent } from './create/create.component';
import {AddComponent} from './add/add.component';

import { FormsModule }   from '@angular/forms';
import { UpdateComponent } from './update/update.component';




@NgModule({
  declarations: [
    AppComponent,
    FoodblogComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    
    CreateComponent,
    AddComponent,
    UpdateComponent,
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
