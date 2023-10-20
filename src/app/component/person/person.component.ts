import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Person } from 'src/app/model/person.model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  personForm$:Observable<FormGroupState<Person>>;

  constructor(private store:Store<AppState>){
    this.personForm$ = store.pipe(
      select(state => state.form.controls.person as FormGroupState<Person>)
    )
  }

}
