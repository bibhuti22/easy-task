export interface NewTask {
  title: string;
  summary: string;
  dueDate: string;
}

export interface Task extends NewTask {
  id: string;
  userId: string;
}
