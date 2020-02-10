import { ValidatorFn, Validators } from '@angular/forms';

export const PasswordValidator: ValidatorFn = Validators.pattern(/^(?=.*[a-z])(?=.{2,}[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
