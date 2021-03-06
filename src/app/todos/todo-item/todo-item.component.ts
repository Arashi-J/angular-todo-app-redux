import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.models';
import { todoActions } from '../todos.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('input') input!: ElementRef;

  chkCompletado!: FormControl;
  txtInput!: FormControl;

  editando: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe(() => {
      this.store.dispatch(todoActions.toggle({ id: this.todo.id }));
    });

  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.input.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;
    if (this.txtInput.invalid) { return; }
    if (this.txtInput.value === this.todo.texto) { return; }
    this.store.dispatch(
      todoActions.editar({ id: this.todo.id, texto: this.txtInput.value })
    );
  }

  borrar() {
    this.store.dispatch(todoActions.borrar({ id: this.todo.id }));
  }

}
