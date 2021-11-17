import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable, tap } from "rxjs";

export interface Todo {
    id: number
    title: string
    completed: boolean
}

@Injectable({providedIn: 'root'})
export class TodosService {
    public todos: Todo[] = []

    constructor(private http: HttpClient) {}

    fetchTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .pipe(tap(todos => this.todos = todos))
    }

    onToggle(id: number) {
        this.todos = this.todos.map(t => t.id === id ? {...t, completed: !t.completed} : t)
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter(t => t.id !== id)
    }

    addTodo(todo: Todo) {
        this.todos.push(todo)
    }
}