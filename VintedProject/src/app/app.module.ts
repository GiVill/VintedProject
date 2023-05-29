import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Component} from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './Components/main-nav/main-nav.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTreeModule} from '@angular/material/tree';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatTreeModule,
    MatSidenavModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
