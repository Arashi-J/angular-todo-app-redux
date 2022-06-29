import { createAction, props } from '@ngrx/store';

export type FiltrosValidos = 'TODOS' | 'COMPLETADOS' | 'PEDIENTES';


export const filtroActions = {
    setFiltro: createAction('[FILTRO] Set Filtro', props<{ filtro: FiltrosValidos; }>()),


};