import { AbstractControl, AsyncValidator, FormControl } from '@angular/forms';
import { EnzoicService } from '../enzoic.service';
import { map, catchError } from 'rxjs/operators'
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompromisedPassword implements AsyncValidator {
  constructor(private enzoic: EnzoicService) { }

  validate = (control: AbstractControl) => {
    return this.enzoic.checkPassword(control.value).pipe(
      map(()=> {
        return {compromised: true}
      }),
      catchError((err) => {
        console.log(err);
        return of(null);
      })
    )
  }
}