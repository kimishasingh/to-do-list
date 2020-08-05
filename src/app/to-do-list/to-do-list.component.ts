import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from './todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  public todos: any[] = [];
  @Output() todoComplete = new EventEmitter<any>();

  constructor(private service: TodoService, private router: Router) {
  }

  ngOnInit(): void {
    this.service.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  markAsChecked(todo): void {
    todo.isCompleted = !todo.isCompleted;
    this.todoComplete.emit(todo);
  }
}
