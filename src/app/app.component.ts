import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { InvalidFieldsSelector } from './store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // public appErrors$: Observable<number>;
  // public personErrors$: Observable<number>;
  // public configErrors$: Observable<number>;
  // constructor(private invalidFieldsSelector:InvalidFieldsSelector) {
  //   this.appErrors$ = invalidFieldsSelector.appErrors$;
  //   this.personErrors$ = invalidFieldsSelector.personErrors$;
  //   this.configErrors$ = invalidFieldsSelector.configErrors$;
  // }

}
