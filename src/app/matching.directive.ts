import { Directive, ElementRef } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  Validator,
  FormGroup,
  NG_VALIDATORS,
  ValidatorFn,
} from '@angular/forms';

function validatePassword(): ValidatorFn {
  return (control: AbstractControl) => {
    let isValid = false;
    if (control && control instanceof FormGroup) {
      let group = control as FormGroup;
      if (group.controls['password'] && group.controls['repassword']) {
        isValid =
          group.controls['password'].value ==
          group.controls['repassword'].value;
      }
    }
    if (isValid) {
      return null;
    } else {
      return { passwordCheck: 'failed' };
    }
  };
}

@Directive({
  selector: '[appMatching]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatchingDirective,
      multi: true,
    },
  ],
})
export class MatchingDirective implements Validator {
  private valFn;

  constructor() {
    this.valFn = validatePassword();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.valFn(c);
  }
}
