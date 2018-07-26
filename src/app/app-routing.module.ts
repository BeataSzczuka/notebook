import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import {TodoDetailsComponent } from './todo-details/todo-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/todos', pathMatch: 'full'},
  {path: 'todos', component: TodosComponent},
  {path: 'details/:id', component: TodoDetailsComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
