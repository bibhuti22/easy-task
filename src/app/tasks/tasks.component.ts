import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { ModalComponent } from '../modal/modal.component';
import type { Task, NewTask } from './task.types';
import { TasksService } from './tasks.service';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, ModalComponent, CardComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input() name: string | undefined;

  tasks: Task[] = DUMMY_TASKS;
  shouldShowCreateTask = false;

  // other way to inject any injectable class.
  // private tasksService = inject(TasksService);

  // constructor way to instantiate the class and use it wherever needed
  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getSelectedUserTasks(this.userId);
  }

  completeTask(id: string) {
    this.tasksService.completeTask(id);
  }

  onClickAddTask() {
    this.shouldShowCreateTask = true;
  }

  onAddTask(payload: NewTask) {
    this.tasksService.addTask({
      id: new Date().getTime().toString(),
      userId: this.userId,
      ...payload,
    });

    this.shouldShowCreateTask = false;
  }
}
