import { createAction, props } from '@ngrx/store';

export const actions = {
    crear: createAction('[TODO] Crear TODO', props<{ texto: string; }>()),
    toggle: createAction('[TODO] Toggle TODO', props<{ id: number; }>()),
    editar: createAction('[TODO] Editar TODO', props<{ id: number; texto: string; }>()),
    borrar: createAction('[TODO] Borrar TODO', props<{ id: number; }>()),
    toggleAll: createAction('[TODO] Toggle All TODO', props<{ completado: boolean }>()),

};