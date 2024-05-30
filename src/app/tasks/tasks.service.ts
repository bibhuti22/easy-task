import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import type { Task } from './task.types';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getSelectedUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  completeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks(this.tasks);
  }

  addTask(payload: Task) {
    this.tasks.unshift({
      ...payload,
    });

    this.saveTasks(this.tasks);
  }

  saveTasks(tasks: Task[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
