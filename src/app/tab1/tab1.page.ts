import { Component, ViewChild } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public tasks:string[];
  public task:string;
  @ViewChild('entrada', {static: false}) ionInput: { setFocus: () => void; };
  
  constructor(private taskService:TasksService) {
    this.tasks = this.taskService.getTasks();
    this.task = "algo";
  }

  public addTasks(){
    this.taskService.addTask(this.task);
    this.tasks = this.taskService.getTasks();
    this.task="";
    this.ionInput.setFocus();
  }

  public removeTask(pos:number){
    this.taskService.removeTask(pos);
    this.tasks = this.taskService.getTasks();
  }

  public completeTask(pos:number){
    this.taskService.completeTask(pos);
    this.tasks = this.taskService.getTasks();
  }

}
