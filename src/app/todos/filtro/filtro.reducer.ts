import { Action, createReducer, on } from "@ngrx/store";
import { filtroActions, FiltrosValidos } from "./filtro.actions";

const estadoInicial: FiltrosValidos = 'TODOS';

export const filtroReducer = createReducer<FiltrosValidos, Action>(
    estadoInicial,
    on(filtroActions.setFiltro, (state, { filtro }) => filtro),


);
