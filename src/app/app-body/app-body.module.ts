import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPatientComponent } from './add-patient/add-patient.component';
import {MdCardModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import {MdButtonModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdDatepickerModule, MdNativeDateModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';
import { FormsModule } from '@angular/forms';




@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule,
    MdTabsModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSelectModule
  ],
  declarations: [AddPatientComponent],
  exports: [
    AddPatientComponent
  ]
})
export class AppBodyModule { }
