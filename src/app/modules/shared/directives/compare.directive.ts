import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } 
from '@angular/forms';

@Directive({
  selector: '[compareTo]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting:CompareDirective,
      multi:true
    }
  ]
})
export class CompareDirective  {

  constructor() { }
 

}
/**
 * compare method which can be exported
 * @param {string} password 
 * @param {string} confirmPassword 
 * @returns Validator function
 */
export const compare = (password:string, confirmPassword:string):ValidatorFn =>{

  return control =>{
    var c1 = control.get(password);
    var c2 = control.get(confirmPassword);
    var v1 = c1!.value;
    var v2 = c2!.value;

    if(v1 === v2)
      return null;
    else
      return {compare:{message:`The fields ${password} and ${confirmPassword} don't match`}};
  }

}