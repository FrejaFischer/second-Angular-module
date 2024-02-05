import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DogPictureComponent } from './dog-picture/dog-picture.component';
import { AsyncPipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent, DogPictureComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AsyncPipe],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
