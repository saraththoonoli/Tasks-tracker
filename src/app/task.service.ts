import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
// array to store the tasks
  tasks: any[] = [];
// get the array
  getTasks(): any[] {
    return this.tasks;
  }

  addTask(task: any): void {
    this.tasks.push(task);
  }

  updateTask(index: number, updatedTask: any): void {
    this.tasks[index] = { ...this.tasks[index], ...updatedTask };
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

}
