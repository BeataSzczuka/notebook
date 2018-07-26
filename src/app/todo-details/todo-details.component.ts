import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { ActivatedRoute } from '@angular/router';
import {TodoDataService } from '../todo-data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  @Input() todo : Todo;
  constructor(
    private route: ActivatedRoute,
    private todoDataService: TodoDataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTodo();
  }
  getTodo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoDataService.getTodo(id)
      .subscribe(todo => this.todo = todo);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void{
    this.todoDataService.updateTodo(this.todo)
    .subscribe(() => this.goBack());
  }
}
