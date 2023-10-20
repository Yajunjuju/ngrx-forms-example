import { required, greaterThanOrEqualTo } from 'ngrx-forms/validation';
import { validate } from 'ngrx-forms';
import { updateGroup } from 'ngrx-forms';
import { Config } from '../model/config.model';

export const initialConfigState = {
  minAge:21
}

export const configGroupValidation = updateGroup<Config>({
  minAge:validate([required, greaterThanOrEqualTo(0)])
})
