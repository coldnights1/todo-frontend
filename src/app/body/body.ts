import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { AddTaskComponent } from '../add-task/add-task';
import { TaskObj } from '../task.model/task.model';
import { FooterComponent } from '../footer/footer';
interface Task {
  task_name: string;
  time_to_complete: string;
  importance: string;
  completed?: boolean;
}

@Component({
  selector: 'app-body',
  standalone: true,
  templateUrl: './body.html',
  imports:[NgClass,AddTaskComponent,FooterComponent],
  styleUrls: ['./body.css']
})
export class BodyComponent {
  tasks: Task[] = [
    { task_name: 'Learn Angular',  time_to_complete: '2h', importance: 'High',   completed: false },
    { task_name: 'Build Todo App', time_to_complete: '3h', importance: 'Medium', completed: false },
    { task_name: 'Practice Daily', time_to_complete: '1h', importance: 'High',   completed: false }
  ];

  showProgress = false;
  showAddTask=false;
  markCompleted(t: Task) { t.completed = true; }
  get total() { return this.tasks.length; }
  get done()  { return this.tasks.filter(t => t.completed).length; }
  get percent() { return this.total ? Math.round((this.done / this.total) * 100) : 0; }

  trackProgress() { this.showProgress =!this.showProgress; }
  toggleAddTask(){ this.showAddTask=!this.showAddTask;}
  AddTask(obj:TaskObj){
     //it will get re-rendered 
     this.tasks.push({task_name: obj.enteredTaskName,time_to_complete: obj.enteredTime,importance :obj.enteredImportance,completed:false});
  }
  Clear(){
     this.tasks=[];
  }
}
