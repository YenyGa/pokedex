import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordValidator} from '../../../../core/validators/password.validator';
import {Store} from '@ngrx/store';
import {State} from '../../../../core/store';
import {Actions, ofType} from '@ngrx/effects';
import {AuthActionTypes, SignedUp, SignUp} from '../../../../core/store/auth/auth.actions';
import {take} from 'rxjs/operators';
import {UserModel} from '../../../../core/models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup = new FormGroup({});
  showToast = false;

  constructor(private formBuilder: FormBuilder,
              private store: Store<State>,
              private actions$: Actions,
              private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: [undefined, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, PasswordValidator]],
      secondPassword: ['', [Validators.required, PasswordValidator]]
    });
    this.signUpForm.get('secondPassword').valueChanges.subscribe(value => {
      if (value !== this.signUpForm.get('password').value) {
        this.signUpForm.get('secondPassword').setErrors({notTheSame: true});
      }
    });
  }

  signUp() {
    this.actions$.pipe(
      ofType<SignedUp>(AuthActionTypes.SignedUp),
      take(1)
    ).subscribe(() => {
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
        this.router.navigateByUrl('');
      }, 3000);
    });
    if (this.signUpForm.valid) {
      const user: UserModel = this.signUpForm.getRawValue();
      this.store.dispatch(new SignUp({
        user: {
          name: this.signUpForm.get('name').value,
          email: this.signUpForm.get('email').value,
          password: this.signUpForm.get('password').value,
        }
      }));
    }
  }

}
