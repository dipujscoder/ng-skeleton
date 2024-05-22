import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface TodoType {
  id: number;
  task: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosSubject = new BehaviorSubject<TodoType[]>([]);
  todos$ = this.todosSubject.asObservable();

  private todos: TodoType[] = [];
  private nextId = 1;

  constructor() {
    console.log(this.todos);
  }

  getTodos() {
    return this.todos$;
  }

  addTodo(task: string) {
    console.log('hit add todo service');

    const newTodo: TodoType = {
      id: this.nextId++,
      task: task,
      completed: false,
    };

    this.todos = [...this.todos, newTodo];

    this.todosSubject.next(this.todos);
  }
}
