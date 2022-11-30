

import { Directive, Inject } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { map, Observable, of } from 'rxjs';
import { UserService } from '../../users/services/user.service';

/**
 * Unique Email directive
 */
@Directive({
  selector: '[uniqueEmail]',
  providers: [
    { provide: NG_ASYNC_VALIDATORS, 
      useExisting: UniqueEmailDirective,
      multi: true }
  ]
})
export class UniqueEmailDirective implements AsyncValidator {

  /**
   * constructor of UniqueEmailDirective with dependency injection
   * @param userService 
   */
  constructor(@Inject("UserService") private userService: UserService) { }
  /**
   * validate method
   * @param control 
   * @returns Promise of type ValidationErrors or null, Observable of ValidationErrors or null
   */
  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return uniqueEmailValidator(this.userService)(control);
  }

  registerOnValidatorChange?(fn: () => void): void {
  }

}

/**
 * uniqueEmailValidator function for directive
 * @param userService 
 * @returns AsyncValidatorFunction
 */

export const uniqueEmailValidator = (userService: UserService): AsyncValidatorFn => {

  var actualValidator: AsyncValidatorFn = (control: AbstractControl<any, any>)
              : Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    

      return (<Observable<boolean>>userService
                .isEmailRegistered(control.value))
                .pipe(
                  map( (registered:boolean)=>{
                    if(registered)
                      return {uniqueEmail:{message:`duplicate email id`}};
                    else
                      return null;
                  })
                );


    return of(null);
  };

  return actualValidator;
}

