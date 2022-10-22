import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: string[] = [];
  private compl: string[] = [];
  
  constructor() { 
    this.tasks.push("Tarea 1");
    this.tasks.push("Tarea 2");
    this.compl.push("Completada 1");
    this.compl.push("Completada 2");
  }

  public getTasks():string[]{
    return this.tasks;
  }

  public getComplete():string[]{
    return this.compl;
  }

  public addTask(task:string){
    this.tasks.push(task);
  }

  public removeTask(pos:number){
    this.tasks.splice(pos, 1);
  }

  public completeTask(pos:number){
    this.compl.push(this.tasks[pos]);
    this.tasks.splice(pos, 1);
  }

  public uncompleteTask(pos:number){
    this.tasks.push(this.compl[pos]);
    this.compl.splice(pos, 1);
  }

  public remCompleteTask(pos:number){
    this.compl.splice(pos, 1);
  }
}