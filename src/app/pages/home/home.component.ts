import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, } from '@angular/forms';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false
    }
  ]);


  //formControl
  newTaskControl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
    ]
  });
  changeHandler() {
    // const input = event.target as HTMLInputElement;
    // const newTask = input.value;
    // this.tasks.update((tasks) => [...tasks, newTask]); pasa a addTask()
    if (this.newTaskControl.valid) {
      const value = this.newTaskControl.value.trim();
      if(value!==''){
        this.addTask(value);
        this.newTaskControl.setValue('');
      }
    }


  }
  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }
  deleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
  }

  updateTask(index: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      });
    });
  }
}
