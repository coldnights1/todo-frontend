import { Component, EventEmitter,Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskObj } from '../task.model/task.model';
 @Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTaskComponent {
   enteredImportance='';
   enteredTime='';
   enteredTaskName='';
   @Output() output=new EventEmitter<TaskObj>();
   onAddTask(){
   console.log(this.enteredImportance,this.enteredTime,this.enteredTaskName);
      const task:TaskObj={
      enteredTaskName: this.enteredTaskName,
      enteredTime: this.enteredTime,
      enteredImportance: this.enteredImportance
     };
     this.output.emit(task);
     this.enteredTaskName='';
     this.enteredTime='';
     this.enteredImportance='';
   }
}
