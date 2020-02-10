import { ValidatorFn, Validators } from '@angular/forms';

export const PasswordValidator: ValidatorFn = Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
