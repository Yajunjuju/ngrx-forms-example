import { required } from 'ngrx-forms/validation';
import { validate, updateGroup } from 'ngrx-forms';
import { Person } from '../model/person.model';


export const initailPersonState = {
  firstName:'',
  lastName:'',
  age:10
}

export const personGroupValidation = updateGroup<Person>({
  firstName:validate(required),
  lastName:validate(required)
})
