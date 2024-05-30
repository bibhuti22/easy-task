import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

interface User {
  name: string;
  id: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  // Props
  @Input({ required: true }) user!: User;
  @Input() selectedUserId?: string | undefined;

  // Emits
  @Output() select = new EventEmitter<string>();

  get isUserSelected(): boolean {
    return this.user.id === this.selectedUserId;
  }

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // new signal input Props approach
  // avatar = input.required<string>();
  // name = input.required<string>();

  // new output Event approach
  // select = output<string>();

  // imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
