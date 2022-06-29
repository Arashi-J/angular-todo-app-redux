import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtroActions, FiltrosValidos } from '../filtro/filtro.actions';
import { todoActions } from '../todos.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: FiltrosValidos = 'TODOS';
  filtros: FiltrosValidos[] = ['TODOS', 'COMPLETADOS', 'PEDIENTES'];
  pendientes: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filtro')
    //   .subscribe(filtro => this.filtroActual = filtro);
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = (state.todos.filter(todo => !todo.completado)).length;
    });
  }

  cambiarFiltro(filtro: FiltrosValidos) {
    this.store.dispatch(filtroActions.setFiltro({ filtro }));
  }

  borrarCompletados() {
    this.store.dispatch(todoActions.borrarCompletados());
  }

}
