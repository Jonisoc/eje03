import { Component } from '@angular/core';
import { TasksService } from '../services/tasks.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public compl:string[];
  
  constructor(private taskService:TasksService) {
    this.compl = this.taskService.getComplete();
  }

  public uncompleteTask(pos:number){
    this.taskService.uncompleteTask(pos);
    this.compl = this.taskService.getComplete();
  }

  public remCompleteTask(pos:number){
    this.taskService.remCompleteTask(pos);
    this.compl = this.taskService.getComplete();
  }

}
