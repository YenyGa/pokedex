import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordValidator} from '../../../../core/validators/password.validator';
import {Store} from '@ngrx/store';
import {State} from '../../../../core/store';
import {AuthActionTypes, SignedUp, SignUp} from '../../../../core/store/auth/auth.actions';
import {UserModel} from '../../../../core/models/user.model';
import {Actions, ofType} from '@ngrx/effects';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
              private store: Store<State>,
              private actions$: Actions) { }

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
      console.log('signed up');
    });
    if (this.signUpForm.valid) {
      const user: UserModel = this.signUpForm.getRawValue();
      this.store.dispatch(new SignUp({user}));
    }
  }

}
