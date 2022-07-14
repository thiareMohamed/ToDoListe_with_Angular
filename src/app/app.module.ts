import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormAjoutTacheComponent } from './form-ajout-tache/form-ajout-tache.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAjoutTacheComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
