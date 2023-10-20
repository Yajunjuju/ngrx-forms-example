import { FormGroupState } from 'ngrx-forms';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from 'src/app/model/config.model';
import { AppState } from 'src/app/store/app.reducer';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {

  configForm$: Observable<FormGroupState<Config>>;

  constructor(private store:Store<AppState>) {
    this.configForm$ = store.pipe(
      select(state => <FormGroupState<Config>>state.form.controls.config),
    );
  }
}
