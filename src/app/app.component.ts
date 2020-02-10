import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {State} from './core/store';
import {take} from 'rxjs/operators';
import {selectAuthUser} from './core/store/auth/auth.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokedex';

  constructor(private router: Router,
              private store: Store<State>) {}

  redirectToMainPage() {
    this.store
      .pipe(
        select(selectAuthUser),
        take(1)
      ).subscribe(user => {
        if (user) {
          this.router.navigateByUrl('list');
        } else {
          this.router.navigateByUrl('');
        }
    });
  }
}
