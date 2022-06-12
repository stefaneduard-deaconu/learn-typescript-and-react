export interface TaskItem {
  id: number;
  taskText: string;
  isCompleted: boolean;
}

export interface Store {
  tasks: TaskItem[];
  newTask: string;
}
