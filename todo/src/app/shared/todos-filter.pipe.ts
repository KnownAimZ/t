import { Pipe, PipeTransform } from "@angular/core";
import { Todo } from "./todos.service";

@Pipe({
    name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {
    transform(todos: Todo[], search: string = ''): Todo[] {
        return !search.length ? todos : 
        todos.filter(t => t.title.toLowerCase().includes(search.toLowerCase()))
    }
}