import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDo Application';
  titleListe = 'Liste des taches'
  myVar = false

  showForm(){
      if (this.myVar == false){
        this.myVar = true
      }
      else {
        this.myVar = false
      }
  }

}
