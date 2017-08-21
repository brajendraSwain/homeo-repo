import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {AppBodyModule} from "./app-body/app-body.module";
import {HomeoRepoService} from "./services/homeo-repo.service";
import {HeadersModule} from "./headers/headers.module";
import {MdIconModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdIconModule,
    AppBodyModule,
    HeadersModule
  ],
  providers: [
    HomeoRepoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
