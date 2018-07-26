import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {Todo} from '../todo';
import {TodosComponent} from '../todos/todos.component';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();


  constructor(private todosComponent : TodosComponent) { }

  ngOnInit() {
  }
  removeTodo(todo: Todo) {
    this.todosComponent.removeTodo(todo);
}
toggleTodoComplete(todo : Todo)
{
  this.todosComponent.toggleTodoComplete(todo);
}


}
