import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function incorrectCityNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const correct = nameRe.test(control.value) || control.value.LocalizedName;
    return !correct ? {incorrectCityName: {value: control.value}} : null;
  };
}
