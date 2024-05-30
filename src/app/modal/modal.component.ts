import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { NewTask } from '../tasks/task.types';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Output() closeModal = new EventEmitter();
  @Output() addTask = new EventEmitter();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // by using signals - two way binding
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  onCancel() {
    this.closeModal.emit();
  }
  onSubmit() {
    const payload: NewTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    };

    this.addTask.emit(payload);
  }
}
