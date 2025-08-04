import { Validators as NgValidators } from '@angular/forms';

export class Validators {
  // Map built-in Angular form validators
  public static minLength = NgValidators.minLength;
  public static maxLength = NgValidators.maxLength;
  public static required = NgValidators.required;
  public static requiredTrue = NgValidators.requiredTrue;
  public static email = NgValidators.email;
  public static min = NgValidators.min;
  public static max = NgValidators.max;
}
