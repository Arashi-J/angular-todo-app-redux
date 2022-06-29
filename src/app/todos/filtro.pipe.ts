import { Pipe, PipeTransform } from '@angular/core';
import { FiltrosValidos } from './filtro/filtro.actions';
import { Todo } from './models/todo.models';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: FiltrosValidos): Todo[] {

    switch (filtro) {

      case 'COMPLETADOS':
        return todos.filter(todo => todo.completado);

      case 'PEDIENTES':
        return todos.filter(todo => !todo.completado);

      default:
        return todos;
    }
  }

}
