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
  task: any
  data: any ={
    title: String,
    declaration: String,
    date: Date
  }
  tasks: Array<any> = [
    {
      title: "Rapport sur angular",
      date: new Date(),
      description: "Le Lorem Ipsum est simplement du faux\n" +
        "    texte employé dans la composition et la\n" +
        "    mise en page avant impression. Le Lorem\n" +
        "    Ipsum est le faux texte standard de\n" +
        "    l'imprimerie depuis les années 1500,"
    },
    {
      title: "Rapport sur java",
      date: new Date(),
      description: "Le Lorem Ipsum est simplement du faux\n" +
        "    texte employé dans la composition et la\n" +
        "    mise en page avant impression. Le Lorem\n" +
        "    Ipsum est le faux texte standard de\n" +
        "    l'imprimerie depuis les années 1500,"
    },
    {
      title: "Rapport sur React",
      date: new Date(),
      description: "Le Lorem Ipsum est simplement du faux\n" +
        "    texte employé dans la composition et la\n" +
        "    mise en page avant impression. Le Lorem\n" +
        "    Ipsum est le faux texte standard de\n" +
        "    l'imprimerie depuis les années 1500,"
    }
  ]

  showForm(){
      if (this.myVar == false){
        this.myVar = true
      }
      else {
        this.myVar = false
      }
  }

  showTaskFromForm(task: any){
    if (task) {
      console.log(task)
      this.task = task
      // this.data.title = task.title
      // this.data.description = task.description
      // this.data.date = this.task.date

      this.tasks.push(this.task)
      console.log(this.tasks)
      this.showTask()
    }
  }
  showTask(){
    return this.tasks
  }

}
