import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-ajout-tache',
  templateUrl: './form-ajout-tache.component.html',
  styleUrls: ['./form-ajout-tache.component.scss']
})
export class FormAjoutTacheComponent implements OnInit {

  @Output() newtask = new EventEmitter();

  taskForm = new FormGroup({
    title: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }

  showData(){
    this.newtask.emit(this.taskForm.value)
    this.taskForm.reset()
  }
}
