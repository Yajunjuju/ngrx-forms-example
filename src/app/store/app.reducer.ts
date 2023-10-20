
import { AbstractControlState, FormGroupState, createFormGroupState, createFormStateReducerWithUpdate, updateGroup, validate } from "ngrx-forms";

import { Config } from "../model/config.model";
import { Person } from "../model/person.model";
import { initailPersonState, personGroupValidation } from "./person.reducer";
import { configGroupValidation, initialConfigState } from "./config.reducer";


export interface AppState{
  form:FormGroupState<AppForm>;
}

export interface AppForm{
  person:Person
  config:Config
}

export const initialFormState = createFormGroupState<AppForm>('form', {
  person:initailPersonState,
  config:initialConfigState
})

export const formReducer = createFormStateReducerWithUpdate<AppForm>(
  updateGroup<AppForm>({
    person:personGroupValidation,
    config:configGroupValidation
  }),
)

export const appReducer = {
  form:formReducer
}

export const initialState:AppState = {
  form:initialFormState
}



