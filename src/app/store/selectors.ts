import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  FormGroupState,
  AbstractControlState,
} from 'ngrx-forms';
import { Observable } from 'rxjs';

import { AppState} from './app.reducer';

@Injectable()
export class InvalidFieldsSelector {
  appErrors$: Observable<number>;
  personErrors$: Observable<number>;
  configErrors$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.appErrors$ = store.pipe(
      select(state => countValidationErrors(state.form)),
    );
    this.personErrors$ = store.pipe(
      select(state => countValidationErrors(state.form.controls.person)),
    );
    this.configErrors$ = store.pipe(
      select(state => countValidationErrors(state.form.controls.config)),
    );
  }
}

function countValidationErrors(control: AbstractControlState<any>): number {
  const subControl = (<FormGroupState<any>>control).controls;
  if (control.isPristine) {
    return 0;
  }
  if (!subControl) {
    return Object.keys(control.errors).length;
  }
  return Object.keys(subControl).reduce((errors, key) => {
    return countValidationErrors(subControl[key]) + errors;
  }, 0);
}
