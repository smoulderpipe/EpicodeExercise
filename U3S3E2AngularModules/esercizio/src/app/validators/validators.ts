import { FormControl, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(control: FormControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const passwordConf = control.get('passwordConf')?.value;

  if (password !== passwordConf) {
    return { passwordMatch: true };
  }

  return null;
}