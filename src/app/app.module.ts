import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './Components/cards/cards.component';
import { HomeComponent } from './Components/home/home.component';
import { ViewComponent } from './Components/view/view.component';

import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ShortNumberPipe } from './shortnumber.pipe';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HomeComponent,
    ViewComponent,
    ShortNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatInputModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
