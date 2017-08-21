import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MdToolbarModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import {MdIconModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule
  ],
  declarations: [ToolbarComponent, NavbarComponent],
  exports: [
    ToolbarComponent,
    NavbarComponent
  ]
})
export class HeadersModule { }
