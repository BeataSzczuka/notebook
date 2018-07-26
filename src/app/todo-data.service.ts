import { Injectable } from '@angular/core';
import {Todo} from './todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  lastId : number = 3;
  private todosUrl = 'api/TODOS';  // URL to web api
  constructor(
    private http: HttpClient) { }

  getTodos() : Observable<Todo[]>
  {
      return this.http.get<Todo[]>(this.todosUrl);
      
  }
  getTodo(id: number): Observable<Todo> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.get<Todo>(url);
  }
 /* addTodo(newtodo : Todo) : Todo
  {
    
    newtodo.id = ++this.lastId;
    newtodo.complete = false;
    this.http.post<Todo>(this.todosUrl, newtodo, httpOptions);
    return newtodo;

  }*/
  addTodo(todo : Todo) : Observable<Todo>
  {
    todo.id = ++this.lastId;
    todo.complete = false;
    return this.http.post<Todo>(this.todosUrl, todo);
  }
  addTodo1(title1 : string) : Observable<Todo>
  {
    let newtodo = {id : ++this.lastId, title : title1, complete: false} as Todo;
  
    return this.http.post<Todo>(this.todosUrl, newtodo);
  }
  removeTodo(todo : Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;

    return this.http.delete<Todo>(url, httpOptions);
  }

  public updateTodo(todo: Todo): Observable<any> {
    return this.http
      .put<Todo>(this.todosUrl + '/'+ todo.id, todo);
}

 }
