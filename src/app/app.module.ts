import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { FormAjoutTacheComponent } from './components/form-ajout-tache/form-ajout-tache.component';
import { CarteComponent } from './carte/carte.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAjoutTacheComponent,
    CarteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
