import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public loading: boolean = true;
  public searchString: string = ''

  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.fetchTodos()
    .subscribe(
      () => { this.loading = false }
    );
  }

  onChange(id: number) {
    this.todosService.onToggle(id)
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id)
  }

}
