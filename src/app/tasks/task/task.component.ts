import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';
import { Task } from '../task.types';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [DatePipe, CardComponent],
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() onComplete = new EventEmitter<string>();

  onCompleteTask() {
    this.onComplete.emit(this.task.id);
  }
}
