import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import {Todo} from '../todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  selectedTodo : Todo;
  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

 
  constructor(private todoDataService : TodoDataService) { }

  ngOnInit() 
  {
     this.getallTodos();
     
  }

  
  getallTodos() : void 
  {
    this.todoDataService.getTodos()
    .subscribe(todos => this.todos = todos);
  }


  addTodo(title1 : string) : void
  {
    if (!title1) {return;}
    this.todoDataService.addTodo({ id : 1, title: title1, complete: false, body: ''} as Todo)
    .subscribe(todo =>{this.todos.push(todo);
    });
  }
  removeTodo(todo : Todo)
  {
    this.todos = this.todos.filter(h => h !== todo);
    this.todoDataService.removeTodo(todo).subscribe();
  }
  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    return this.todoDataService.updateTodo(todo);
  }
  onSelect(todo : Todo)
  {
    this.selectedTodo = todo;
  }
}
