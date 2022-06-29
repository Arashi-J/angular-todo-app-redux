import { createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.models";
import { todoActions } from "./todos.actions";

const estadoInicial: Todo[] = [
    new Todo('Salvar el mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar Traje'),
];

export const todosReducer = createReducer(
    estadoInicial,
    on(todoActions.crear, (state, { texto }) => [...state, new Todo(texto)]),

    on(todoActions.toggle, (state, { id }) =>
        state.map(todo =>
            (todo.id === id ? { ...todo, completado: !todo.completado } : todo)),
    ),

    on(todoActions.editar, (state, { id, texto }) =>
        state.map(todo =>
            (todo.id === id ? { ...todo, texto } : todo))
    ),

    on(todoActions.borrar, (state, { id }) =>
        state.filter(todo => todo.id !== id)),

    on(todoActions.toggleAll, (state, { completado }) =>
        state.map(todo => ({ ...todo, completado })),
    ),

    on(todoActions.borrarCompletados, state =>
        state.filter(todo => !todo.completado))
);
