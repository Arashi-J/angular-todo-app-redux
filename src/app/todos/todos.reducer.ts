import { createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.models";
import { actions } from "./todos.actions";

const estadoInicial: Todo[] = [
    new Todo('Salvar el mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar Traje'),
];

export const todosReducer = createReducer(
    estadoInicial,
    on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),

    on(actions.toggle, (state, { id }) =>
        state.map(todo =>
            (todo.id === id ? { ...todo, completado: !todo.completado } : todo)),
    ),

    on(actions.editar, (state, { id, texto }) =>
        state.map(todo =>
            (todo.id === id ? { ...todo, texto } : todo))
    ),

    on(actions.borrar, (state, { id }) =>
        state.filter(todo => todo.id !== id)),

    on(actions.toggleAll, (state, { completado }) =>
        state.map(todo => ({...todo, completado}) ),
    ),
);
