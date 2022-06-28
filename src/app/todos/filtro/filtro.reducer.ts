import { Action, createReducer, on } from "@ngrx/store";
import { actions, FiltrosValidos } from "./filtro.actions";

const estadoInicial: FiltrosValidos = 'TODOS';

export const filtroReducer = createReducer<FiltrosValidos, Action>(
    estadoInicial,
    on(actions.setFiltro, (state, { filtro }) => filtro),


);
