import { ActionReducerMap } from "@ngrx/store";
import { FiltrosValidos } from "./todos/filtro/filtro.actions";
import { filtroReducer } from "./todos/filtro/filtro.reducer";
import { Todo } from "./todos/models/todo.models";
import { todosReducer } from "./todos/todos.reducer";

export interface AppState {
    todos: Todo[];
    filtro: FiltrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todosReducer,
    filtro: filtroReducer
};