import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from '../../../../core/store';
import {Actions, ofType} from '@ngrx/effects';
import {AuthActionTypes, LogedIn, LogIn} from '../../../../core/store/auth/auth.actions';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sing-up',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  logInForm: FormGroup = new FormGroup({});
  showToast = false;

  constructor(private formBuilder: FormBuilder,
              private store: Store<State>,
              private actions$: Actions,
              private router: Router) { }

  ngOnInit(): void {
    this.logInForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  goToSignUp() {
    this.router.navigateByUrl('sign-up');
  }

  logIn() {
    this.actions$.pipe(
      ofType<LogedIn>(AuthActionTypes.LogedIn),
      take(1)
    ).subscribe(({payload}) => {
      if (payload.user) {
        this.router.navigateByUrl('list');
      } else {
        this.showToast = true;
        setTimeout(() => {
          this.showToast = false;
        }, 3000);
      }
    });
    if (this.logInForm.valid) {
      this.store.dispatch(new LogIn({
        user: {
          name: undefined,
          email: this.logInForm.get('email').value,
          password: this.logInForm.get('password').value,
        }
      }));
    }
  }

}
