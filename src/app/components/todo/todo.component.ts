import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodoService, TodoType } from '../../services/todo/todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  error: string = '';

  todoList: TodoType[] = [];

  constructor(private fb: FormBuilder, private todoService: TodoService) {
    console.log(this.todoList);
  }

  onSubmit() {
    if (this.form.valid) {
      // Reset Error
      this.error = '';
      // Add data to Todo service
      this.todoService.addTodo(this.form.value.task);

      // Reset The Form
      this.form.reset();
    } else {
      this.error = 'The name is required';
    }
  }

  // On Init
  ngOnInit(): void {
    this.form = this.fb.group({
      task: ['', Validators.required],
    });

    this.todoService.getTodos().subscribe((todos) => (this.todoList = todos));
  }
}
